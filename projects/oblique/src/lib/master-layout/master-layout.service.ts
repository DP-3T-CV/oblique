import {Injectable} from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, mergeMap, takeUntil} from 'rxjs/operators';

import {ObUnsubscribable} from '../unsubscribe.class';
import {ObMasterLayoutConfig} from './master-layout.config';
import {ObMasterLayoutHeaderService} from './master-layout-header/master-layout-header.service';
import {ObMasterLayoutFooterService} from './master-layout-footer/master-layout-footer.service';
import {ObMasterLayoutNavigationService} from './master-layout-navigation/master-layout-navigation.service';
import {ObMasterLayoutComponentService} from './master-layout/master-layout.component.service';
import {ObILocaleObject} from './master-layout.datatypes';

@Injectable({providedIn: 'root'})
export class ObMasterLayoutService extends ObUnsubscribable {
	private static readonly token = 'oblique_lang';

	constructor(
		private readonly config: ObMasterLayoutConfig,
		private readonly translate: TranslateService,
		private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute,
		public readonly header: ObMasterLayoutHeaderService,
		public readonly footer: ObMasterLayoutFooterService,
		public readonly navigation: ObMasterLayoutNavigationService,
		public readonly layout: ObMasterLayoutComponentService
	) {
		super();
		this.manageLanguage();
		this.routeChange();
	}

	private static getLangToken(): string {
		let langToken = localStorage.getItem(ObMasterLayoutService.token);
		if (!langToken) {
			langToken =
				'_' +
				Math.random()
					.toString(36)
					.replace(/[^a-z]+/g, '')
					.substr(0, 5);
			localStorage.setItem(ObMasterLayoutService.token, langToken);
		}

		return langToken;
	}

	private manageLanguage(): void {
		if (this.config.locale.disabled) {
			if (!this.translate.getDefaultLang()) {
				console.warn('You disabled Oblique language management without providing a default language to @ngx-translate.');
			}
			return;
		}
		if (!Array.isArray(this.config.locale.locales)) {
			throw new Error('Locales needs to be an array');
		}
		const langToken = ObMasterLayoutService.getLangToken();
		const lang = this.getCurrentLang(langToken);
		this.translate.setDefaultLang(lang);
		this.translate.use(lang);
		this.translate.addLangs(
			this.config.locale.locales.reduce((languages, language) => languages.concat([(language as ObILocaleObject).locale || language]), [])
		);
		this.translate.onLangChange.pipe(takeUntil(this.unsubscribe)).subscribe((event: LangChangeEvent) => {
			localStorage.setItem(ObMasterLayoutService.token + langToken, event.lang);
		});
	}

	private getCurrentLang(langToken: string): string {
		const firstLocale = this.config.locale.locales[0];
		// prettier-ignore
		const lang =
			this.getSupportedLang(localStorage.getItem(ObMasterLayoutService.token + langToken))
			|| this.getSupportedLang(this.translate.getBrowserLang())
			|| this.getSupportedLang(this.config.locale.default)
			|| (firstLocale as ObILocaleObject).locale
			|| (firstLocale as string);
		if (!lang) {
			throw new Error('No locale defined');
		}

		return lang;
	}

	private getSupportedLang(lang: string): string {
		return this.config.locale.locales.indexOf(lang) > -1 || this.config.locale.locales.filter((locale: ObILocaleObject) => locale.locale === lang).length
			? lang
			: undefined;
	}

	private routeChange(): void {
		this.router.events
			.pipe(
				takeUntil(this.unsubscribe),
				filter(event => event instanceof NavigationEnd),
				map(() => this.activatedRoute),
				map(route => {
					while (route.firstChild) {
						route = route.firstChild;
					}
					return route;
				}),
				filter(route => route.outlet === 'primary'),
				mergeMap(route => route.data)
			)
			.subscribe(data => {
				const masterLayout = data.masterLayout || {};
				Object.keys(masterLayout).forEach((property: string) => {
					if (masterLayout[property] !== this[property]) {
						this[property] = masterLayout[property];
					}
				});
			});
	}
}
