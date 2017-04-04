import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DatepickerComponent} from './datepicker/datepicker.component';
import {NavigableComponent} from './navigable/navigable.component';
import {SchemaValidationComponent} from './schema-validation/schema-validation.component';
import {MultiselectSampleComponent} from './multiselect/multiselect-sample.component';

const samplesRoutes: Routes = [
    { path: 'datepicker', component: DatepickerComponent },
    { path: 'navigable', component: NavigableComponent },
    { path: 'multiselect', component: MultiselectSampleComponent },
    { path: 'schema-validation', component: SchemaValidationComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(samplesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SamplesRoutingModule {}