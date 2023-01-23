import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-counter-input',
	templateUrl: './counter-input.component.html',
	styleUrls: ['./counter-input.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: CounterInputComponent,
		},
	],
})
export class CounterInputComponent implements ControlValueAccessor {
	@Input() step = 1;

	counter = 0;
	isDisabled = false;

	onChange!: (inputComponentValue: number) => void;
	onTouched!: () => void;

	private isTouched = false;

	constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

	back() {
		this.counter -= this.step;

		this.onChange(this.counter);
		this.markTouched();
	}

	next() {
		this.counter += this.step;

		this.onChange(this.counter);
		this.markTouched();
	}

	writeValue(incomingCounter: number) {
		this.counter = incomingCounter;
		console.log('writeValue', incomingCounter);

		this.changeDetectorRef.markForCheck();
	}

	registerOnChange(fn: (inputComponentValue: number) => void) {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void) {
		this.onTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		this.isDisabled = isDisabled;

		this.changeDetectorRef.markForCheck();
	}

	private markTouched() {
		if (this.isTouched) {
			return;
		}

		this.isTouched = true;

		this.onTouched();
	}
}
