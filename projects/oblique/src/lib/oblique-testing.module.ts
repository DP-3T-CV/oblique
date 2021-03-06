import {NgModule} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';
import {ObMockTranslateService} from './_mocks/mock-translate.service';
import {ObMockTranslatePipe} from './_mocks/mock-translate.pipe';

import {MockCollapseModule} from './collapse/mock/mock-collapse.module';
import {ObMockColumnLayoutModule} from './column-layout/mock/mock-column-layout.module';
import {ObMockSearchBoxModule} from './search-box/mock/mock-search-box.module';
import {ObMockDocumentMetaModule} from './document-meta/mock/mock-document-meta.module';
import {ObMockDropdownModule} from './dropdown/mock/mock-dropdown.module';
import {ObMockErrorMessagesModule} from './error-messages/mock/mock-error-messages.module';
import {ObMockFilterBoxModule} from './filter-box/mock/mock-filter-box.module';
import {ObMockFormControlStateModule} from './form-control-state/mock/mock-form-control-state.module';
import {ObMockMasterLayoutModule} from './master-layout/mock/mock-master-layout.module';
import {ObMockMultiselectModule} from './multiselect/mock/mock-multiselect.module';
import {ObMockNavigableModule} from './navigable/mock/mock-navigable.module';
import {ObMockNavigatorModule} from './navigator/mock/mock-navigator.module';
import {ObMockNavTreeModule} from './nav-tree/mock/mock-nav-tree.module';
import {ObMockNotificationModule} from './notification/mock/mock-notification.module';
import {ObMockNumberFormatModule} from './number-format/mock/mock-number-format.module';
import {ObMockHttpApiInterceptorModule} from './http-api-interceptor/mock/mock-http-api-interceptor.module';
import {ObMockOffCanvasModule} from './off-canvas/mock/mock-off-canvas.module';
import {ObMockPopUpModule} from './pop-up/_mock/mock-pop-up.module';
import {ObMockSchemaValidationModule} from './schema-validation/mock/mock-schema-validation.module';
import {ObMockObSelectableModule} from './selectable/mock/mock-selectable.module';
import {ObMockScrollingModule} from './scrolling/mock/mock-scrolling.module';
import {ObMockSpinnerModule} from './spinner/mock/mock-spinner.module';
import {ObMockStickyModule} from './sticky/mock/mock-sticky.module';
import {ObMockTelemetryModule} from './telemetry/_mock/mock-telemetry.module';
import {ObMockInputClearModule} from './input-clear/mock/mock-input-clear.module';
import {ObMockThemeModule} from './theme/mock/mock-theme.module';
import {ObMockTranslateParamsModule} from './translate-params/mock/mock-translate-params.module';
import {ObMockUnknownRouteModule} from './unknown-route/mock/mock-unknown-route.module';
import {ObMockUnsavedChangesModule} from './unsaved-changes/mock/mock-unsaved-changes.module';
import {WINDOW, windowProvider} from './utilities';

export {MockCollapseModule, MockCollapseComponent} from './collapse/mock/mock-collapse.module';
export {ObMockColumnLayoutComponent, ObMockColumnLayoutModule} from './column-layout/mock/mock-column-layout.module';
export {
	ObMockDateFormatterPipe,
	ObMockDatepickerComponent,
	ObMockDatepickerConfigService,
	ObMockDatepickerI18nService,
	ObMockDatepickerModule,
	ObMockDatepickerPlaceholderDirective
} from './datepicker/mock/mock-datepicker.module';
export {ObMockDocumentMetaModule, ObDocumentMetaService} from './document-meta/mock/mock-document-meta.module';
export {ObMockDropdownModule, ObMockDropdownComponent} from './dropdown/mock/mock-dropdown.module';
export {
	ObMockErrorMessagesModule,
	ObMockErrorMessagesService,
	ObMockErrorMessagesComponent,
	ObMockErrorMessagesDirective,
	ObMockMatErrorDirective
} from './error-messages/mock/mock-error-messages.module';
export {ObMockFilterBoxModule, ObMockFilterBoxComponent} from './filter-box/mock/mock-filter-box.module';
export {ObMockFormControlStateModule, ObMockFormControlStateDirective} from './form-control-state/mock/mock-form-control-state.module';
export {
	ObMockMasterLayoutModule,
	ObMockMasterLayoutConfig,
	ObMockMasterLayoutNavigationService,
	ObMockMasterLayoutHeaderService,
	ObMockMasterLayoutFooterService,
	ObMockMasterLayoutComponent,
	ObMockMasterLayoutFooterComponent,
	ObMockMasterLayoutHeaderComponent,
	ObMockMasterLayoutHeaderToggleDirective,
	ObMockMasterLayoutNavigationComponent,
	ObMockMasterLayoutNavigationItemDirective,
	ObMockMasterLayoutNavigationMenuDirective,
	ObMockMasterLayoutNavigationToggleDirective,
	ObMockMasterLayoutService,
	ObMockMasterLayoutComponentService
} from './master-layout/mock/mock-master-layout.module';
export {
	ObMockMultiselectModule,
	ObMockMultiselectTexts,
	ObMockMultiselectConfig,
	ObMockMultiselectComponent,
	ObMockMultiselectSearchPipe
} from './multiselect/mock/mock-multiselect.module';
export {ObMockNavigableModule, ObMockNavigableDirective, ObMockNavigableGroupComponent} from './navigable/mock/mock-navigable.module';
export {ObMockNavigatorModule, ObMockNavigatorComponent} from './navigator/mock/mock-navigator.module';
export {ObMockNavTreeModule, ObMockNavTreeComponent, ObMockNavTreeFakeFocusDirective} from './nav-tree/mock/mock-nav-tree.module';
export {
	ObMockNotificationModule,
	ObMockNotificationService,
	ObMockNotificationComponent,
	ObMockNotificationConfig
} from './notification/mock/mock-notification.module';
export {ObMockNumberFormatModule, ObMockNumberFormatDirective} from './number-format/mock/mock-number-format.module';
export {ObMockPopUpModule, ObMockPopUpService} from './pop-up/_mock/mock-pop-up.module';
export {
	ObMockHttpApiInterceptorModule,
	ObMockHttpApiInterceptor,
	ObMockHttpApiInterceptorConfig,
	ObMockHttpApiInterceptorEvents
} from './http-api-interceptor/mock/mock-http-api-interceptor.module';
export {
	ObMockOffCanvasModule,
	ObMockOffCanvasBackdropDirective,
	ObMockOffCanvasContainerDirective,
	ObMockOffCanvasService,
	ObMockOffCanvasToggleDirective
} from './off-canvas/mock/mock-off-canvas.module';
export {
	ObMockSchemaValidationModule,
	ObMockSchemaRequiredDirective,
	ObMockSchemaValidateDirective,
	ObMockSchemaValidationDirective,
	ObMockSchemaValidationService
} from './schema-validation/mock/mock-schema-validation.module';
export {ObMockSelectableDirective, ObMockSelectableService} from './selectable/mock/mock-selectable.module';
export {ObMockScrollingModule, ObMockScrollingEvents, ObMockTopControlComponent} from './scrolling/mock/mock-scrolling.module';
export {ObMockSpinnerModule, ObMockSpinnerComponent, ObMockSpinnerService} from './spinner/mock/mock-spinner.module';
export {ObMockStickyModule, ObMockStickyComponent} from './sticky/mock/mock-sticky.module';
export {ObMockTelemetryModule, ObMockTelemetryService} from './telemetry/_mock/mock-telemetry.module';
export {ObMockInputClearModule, ObMockInputClearDirective} from './input-clear/mock/mock-input-clear.module';
export {ObMockThemeService, ObMockThemeModule} from './theme/mock/mock-theme.module';
export {ObMockTranslateParamsModule, ObMockTranslateParamsPipe} from './translate-params/mock/mock-translate-params.module';
export {ObMockUnknownRouteModule, ObMockUnknownRouteComponent} from './unknown-route/mock/mock-unknown-route.module';
export {
	ObMockUnsavedChangesModule,
	ObMockUnsavedChangesGuard,
	ObMockUnsavedChangesDirective,
	ObMockUnsavedChangesService
} from './unsaved-changes/mock/mock-unsaved-changes.module';
export {ObMockTranslateService};

const MOCK_OBLIQUE_MODULES = [
	MockCollapseModule,
	ObMockColumnLayoutModule,
	ObMockDocumentMetaModule,
	ObMockDropdownModule,
	ObMockErrorMessagesModule,
	ObMockFilterBoxModule,
	ObMockFormControlStateModule,
	ObMockHttpApiInterceptorModule,
	ObMockMasterLayoutModule,
	ObMockMultiselectModule,
	ObMockNavigableModule,
	ObMockNavigatorModule,
	ObMockNavTreeModule,
	ObMockNotificationModule,
	ObMockNumberFormatModule,
	ObMockOffCanvasModule,
	ObMockPopUpModule,
	ObMockSchemaValidationModule,
	ObMockScrollingModule,
	ObMockSearchBoxModule,
	ObMockObSelectableModule,
	ObMockSpinnerModule,
	ObMockStickyModule,
	ObMockTelemetryModule,
	ObMockInputClearModule,
	ObMockThemeModule,
	ObMockTranslateParamsModule,
	ObMockUnknownRouteModule,
	ObMockUnsavedChangesModule
];

@NgModule({
	imports: MOCK_OBLIQUE_MODULES,
	exports: [...MOCK_OBLIQUE_MODULES, ObMockTranslatePipe],
	declarations: [ObMockTranslatePipe],
	providers: [
		{provide: TranslateService, useClass: ObMockTranslateService},
		{provide: WINDOW, useFactory: windowProvider}
	]
})
export class ObliqueTestingModule {}
