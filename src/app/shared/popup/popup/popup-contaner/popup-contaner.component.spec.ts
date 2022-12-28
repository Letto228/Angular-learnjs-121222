import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupContanerComponent } from './popup-contaner.component';

describe('PopupContanerComponent', () => {
	let component: PopupContanerComponent;
	let fixture: ComponentFixture<PopupContanerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PopupContanerComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PopupContanerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
