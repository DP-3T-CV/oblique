import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {NgbButtonsModule, NgbCollapseModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {NavTreeSampleComponent} from './nav-tree-sample.component';
import {ObliqueTestingModule} from 'oblique/lib/oblique-testing.module';
import {ObNavTreeComponent} from 'oblique/src/lib/nav-tree/nav-tree.component';

describe('NavTreeSampleComponent', () => {
	let component: NavTreeSampleComponent;
	let fixture: ComponentFixture<NavTreeSampleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NavTreeSampleComponent, ObNavTreeComponent],
			imports: [CommonModule, FormsModule, RouterTestingModule, NgbCollapseModule, NgbButtonsModule, NgbTooltipModule, ObliqueTestingModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(inject([ActivatedRoute], (activatedRoute: ActivatedRoute) => {
		activatedRoute.data = of({sample: {navTree: {items: []}}});
		fixture = TestBed.createComponent(NavTreeSampleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
