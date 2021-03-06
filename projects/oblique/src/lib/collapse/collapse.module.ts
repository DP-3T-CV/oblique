import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ObTelemetryService} from '../telemetry/telemetry.service';
import {requireAndRecordTelemetry} from '../telemetry/telemetry-require';
import {ObCollapseComponent} from './collapse.component';
import {obliqueProviders} from '../utilities';

export {ObCollapseComponent, OBLIQUE_COLLAPSE_ACTIVE} from './collapse.component';

@NgModule({
	imports: [CommonModule],
	declarations: [ObCollapseComponent],
	providers: obliqueProviders(),
	exports: [ObCollapseComponent]
})
export class ObCollapseModule {
	constructor(telemetry: ObTelemetryService) {
		requireAndRecordTelemetry(telemetry, ObCollapseModule);
	}
}
