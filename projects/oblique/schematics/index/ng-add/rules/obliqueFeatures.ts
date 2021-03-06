import {chain, Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {addPackageJsonDependency} from '@schematics/angular/utility/dependencies';
import {Change, InsertChange} from '@schematics/angular/utility/change';
import {addImportToModule, addProviderToModule, addRouteDeclarationToModule, insertImport} from '@schematics/angular/utility/ast-utils';
import {
	angularJsonConfigPath,
	applyChanges,
	appModulePath,
	createDevDependency,
	getJson,
	getJsonProperty,
	listFiles,
	OBLIQUE_PACKAGE,
	routingModulePath
} from '../../ng-add-utils';
import * as ts from 'typescript';

export function obliqueFeatures(options: any): Rule {
	return (tree: Tree, _context: SchematicContext) =>
		chain([addAjv(options.ajv), addUnknownRoute(options.unknownRoute), addInterceptors(options.httpInterceptors), addBanner(options.banner)])(
			tree,
			_context
		);
}

function addAjv(ajv: boolean): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		if (ajv) {
			addPackageJsonDependency(tree, createDevDependency('ajv'));

			let tsConfig = getJson(tree, 'tsconfig.base.json');
			if (tsConfig) {
				// Angular 10
				const json = getJson(tree, angularJsonConfigPath);
				const defaultProjectName = getJsonProperty(json, 'defaultProject');
				if (!json.projects[defaultProjectName].architect.build.options.allowedCommonJsDependencies) {
					json.projects[defaultProjectName].architect.build.options.allowedCommonJsDependencies = [];
				}
				json.projects[defaultProjectName].architect.build.options.allowedCommonJsDependencies.push('ajv');

				tree.overwrite('angular.json', JSON.stringify(json, null, 2));
			}
		}
		return tree;
	};
}

function addUnknownRoute(unknownRoute: boolean): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		if (unknownRoute && tree.exists(routingModulePath)) {
			const sourceFileText: any = tree.read(routingModulePath);
			const sourceFile = ts.createSourceFile(routingModulePath, sourceFileText.toString('utf-8'), ts.ScriptTarget.Latest, true);
			const changes: Change[] = addImportToModule(sourceFile, routingModulePath, 'ObUnknownRouteModule', OBLIQUE_PACKAGE);

			changes.push(addRouteDeclarationToModule(sourceFile, 'app-routing.module.ts', "{path: '**', redirectTo: 'unknown-route'}"));
			tree = applyChanges(tree, routingModulePath, changes);
		}
		return tree;
	};
}

function addInterceptors(httpInterceptors: boolean): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		if (httpInterceptors) {
			const obliqueInterceptorModuleName = 'ObHttpApiInterceptor';
			const obliqueInterceptorProvider = '{provide: HTTP_INTERCEPTORS, useClass: ObHttpApiInterceptor, multi: true}';
			const sourceFileText: any = tree.read(appModulePath);
			const sourceFile = ts.createSourceFile(appModulePath, sourceFileText.toString('utf-8'), ts.ScriptTarget.Latest, true);
			const changes: Change[] = addProviderToModule(sourceFile, appModulePath, obliqueInterceptorProvider, OBLIQUE_PACKAGE);
			if (changes.length > 1) {
				(changes[1] as InsertChange).toAdd = (changes[1] as InsertChange).toAdd.replace(obliqueInterceptorProvider, obliqueInterceptorModuleName);
			}
			changes.push(insertImport(sourceFile, appModulePath, 'HTTP_INTERCEPTORS', '@angular/common/http'));
			tree = applyChanges(tree, appModulePath, changes);
		}
		return tree;
	};
}

function addBanner(banner: boolean): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		if (banner) {
			addBannerData(tree);
			tree = provideBanner(tree);
		}
		return tree;
	};
}

function addBannerData(tree: Tree): void {
	const src = 'src/environments';
	listFiles(src)
		.filter(file => file.indexOf('prod') === -1)
		.map(file => `${src}/${file}`)
		.forEach(file => {
			const env = file.match(/environment\.(?<env>.*)\.ts/)?.groups?.env || 'local';
			let content = tree.read(file);
			if (content) {
				tree.overwrite(file, content.toString().replace('\n};', `,\n  banner: {text: '${env}'}\n};`));
			}
		});
}

function provideBanner(tree: Tree): Tree {
	const provider = "{provide: OB_BANNER, useValue: environment['banner']}";
	const sourceFileText: any = tree.read(appModulePath);
	const sourceFile = ts.createSourceFile(appModulePath, sourceFileText.toString('utf-8'), ts.ScriptTarget.Latest, true);
	const changes: Change[] = addProviderToModule(sourceFile, appModulePath, provider, OBLIQUE_PACKAGE);
	if (changes.length > 1) {
		(changes[1] as InsertChange).toAdd = (changes[1] as InsertChange).toAdd.replace(provider, 'OB_BANNER');
	}
	changes.push(insertImport(sourceFile, appModulePath, 'environment', '../environments/environment'));
	return applyChanges(tree, appModulePath, changes);
}
