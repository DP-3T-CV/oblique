import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {TopControlComponent} from './top-control.component';

@NgModule({
	imports: [
		CommonModule,
		TranslateModule
	],
	declarations: [TopControlComponent],
	exports: [TopControlComponent]
})
export class TopControlModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: TopControlModule
		};
	}
}