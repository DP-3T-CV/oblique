import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ObTypographyComponent} from './typography/typography.component';
import {ObBlockElementsComponent} from './block-elements/block-elements.component';
import {ObInlineElementComponent} from './inline-element/inline-element.component';
import {ObListsComponent} from './lists/lists.component';
import {ObPaletteComponent} from './palette/palette.component';
import {ObTableComponent} from './table/table.component';
import {ObStepperComponent} from './stepper/stepper.component';
import {ObTabsComponent} from './tabs/tabs.component';
import {ObAlertComponent} from './alert/alert.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{path: 'typography', component: ObTypographyComponent},
			{path: 'block', component: ObBlockElementsComponent},
			{path: 'inline', component: ObInlineElementComponent},
			{path: 'lists', component: ObListsComponent},
			{path: 'palette', component: ObPaletteComponent},
			{path: 'table', component: ObTableComponent},
			{path: 'stepper', component: ObStepperComponent},
			{path: 'tabs', component: ObTabsComponent},
			{path: 'alert', component: ObAlertComponent},
			{path: '', redirectTo: 'typography', pathMatch: 'full'}
		])
	],
	declarations: [
		ObTypographyComponent,
		ObBlockElementsComponent,
		ObInlineElementComponent,
		ObListsComponent,
		ObTableComponent,
		ObPaletteComponent,
		ObStepperComponent,
		ObTabsComponent,
		ObAlertComponent
	]
})
export class StylesModule {}
