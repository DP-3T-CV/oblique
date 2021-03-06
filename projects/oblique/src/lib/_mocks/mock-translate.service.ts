import {EventEmitter, Injectable} from '@angular/core';
import {DefaultLangChangeEvent, LangChangeEvent, TranslationChangeEvent} from '@ngx-translate/core';
import {EMPTY, Observable, of} from 'rxjs';

@Injectable()
export class ObMockTranslateService {
	translations: any;
	onLangChange = new EventEmitter<LangChangeEvent>();
	onTranslationChange = new EventEmitter<TranslationChangeEvent>();
	onDefaultLangChange = new EventEmitter<DefaultLangChangeEvent>();
	defaultLang = 'en';
	langs = ['en'];
	currentLang = 'en';

	setTranslation(lang: string, translations: Object, shouldMerge?: boolean): void {}

	getStreamOnTranslationChange(key: string | string[], interpolateParams?: Object): Observable<any> {
		return EMPTY;
	}

	stream(key: string | string[], interpolateParams?: Object): Observable<any> {
		return EMPTY;
	}

	getBrowserLang(): string {
		return 'en';
	}

	getDefaultLang(): string {
		return 'en';
	}

	setDefaultLang(lang: string): void {}

	get(key: string | Array<string>, interpolateParams?: Object): Observable<string | string[]> {
		return of(key);
	}

	use(lang: string): Observable<any> {
		return of('');
	}

	instant(string: string): string {
		return string;
	}

	getTranslation(lang: string): Observable<any> {
		return of('');
	}

	getLangs(): Array<string> {
		return this.langs;
	}

	addLangs(langs: Array<string>): void {
		this.langs = langs;
	}

	getParsedResult(translations: any, key: any, interpolateParams?: Object): any {
		return '';
	}

	set(key: string, value: string, lang?: string): void {}

	reloadLang(lang: string): Observable<any> {
		return of('');
	}

	resetLang(lang: string): void {}

	getBrowserCultureLang(): string {
		return 'en';
	}
}
