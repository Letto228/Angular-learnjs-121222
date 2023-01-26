import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { ValidatorsModule } from '../validators.module';
import { IsStringDirective } from './is-string.directive';

describe('IsStringDirective', () => {
	const directive = new IsStringDirective();

	it('valid', () => {
		const error = directive.validate(new FormControl('String'));

		expect(error).toBeNull();
	});

	it('invalid', () => {
		const error = directive.validate(new FormControl('123'));

		expect(error).toEqual({ isStringValidator: 'is not string' });
	});
});

@Component({
	selector: 'app-test',
	template: `<input #input appIsString [ngModel]="search" />`,
})
class TestComponent {
	search = '123';

	@ViewChild('input', { static: true, read: NgModel }) model!: NgModel;
}

describe('IsStringDirective Integration', () => {
	let fixture: ComponentFixture<TestComponent>;
	let component: TestComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestComponent],
			imports: [ValidatorsModule, FormsModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		component = fixture.componentInstance;
	});

	it('Ошибка при старте', fakeAsync(() => {
		fixture.detectChanges();

		tick(100);

		const error = component.model.errors;

		expect(error).toEqual({ isStringValidator: 'is not string' });
	}));
});
