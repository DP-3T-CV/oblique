import {ObMatErrorDirective} from './mat-error.directive';
import {EMPTY} from 'rxjs';

describe('MatErrorDirective', () => {
	it('should create an instance', () => {
		// @ts-ignore
		const directive = new ObMatErrorDirective(null, null, {onLangChange: EMPTY});
		expect(directive).toBeTruthy();
	});
});
