import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { IProductsFilter } from './products-filter.interface';

@Component({
	selector: 'app-products-filter',
	templateUrl: './products-filter.component.html',
	styleUrls: ['./products-filter.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsFilterComponent {
	@Input() brands!: string[] | null;

	@Output() changeFilter = new EventEmitter<IProductsFilter>();

	log = console.log;

	// readonly filterForm = new FormGroup({
	// 	// name: new FormControl({value: '', disabled: true}, {validators: [Validators.minLength(3)]}),
	// 	name: new FormControl('', {validators: [Validators.minLength(3)]}),
	// 	brands: new FormArray<FormControl>([]),
	// 	priceRange: new FormGroup({
	// 		min: new FormControl(0),
	// 		max: new FormControl(100000),
	// 	}),
	// })

	// get filterFormControl(): FormControl {
	// 	return this.filterForm.get(['priceRange', 'min']) as FormControl;
	// }

	// ngOnChanges({brands}: SimpleChanges): void {
	// 	if (brands && this.brands) {
	// 		// this.initBrandsFormArray();

	// 		setTimeout(() => {
	// 			// this.filterForm.get('name')?.setValidators(Validators.required);
	// 			this.filterForm.get('name')?.disable();

	// 			console.log(this.filterForm.value);
	// 			console.log(this.filterForm.getRawValue());

	// 			// this.filterForm.setValue({
	// 			// 	name: '123',
	// 			// 	brands: this.brands?.map(() => new FormControl<boolean>(true)) as FormControl<boolean>[],
	// 			// 	priceRange: {
	// 			// 		max: 20,
	// 			// 		min: 10,
	// 			// 	}
	// 			// }, {emitEvent: true});
	// 			// this.filterForm.patchValue({
	// 			// 	priceRange: {
	// 			// 		max: 300,
	// 			// 	}
	// 			// });
	// 		// }, 3000);
	// 	}
	// }

	// ngOnInit(): void {
	// this.filterForm.valueChanges
	// 	.pipe(
	// 		map(({brands, ...filter}): IProductsFilter => ({
	// 			...filter,
	// 			brands: this.getBrandsListFromCheckboxes(brands),
	// 		} as IProductsFilter))
	// 	)
	// 	.subscribe(filter => {
	// 		console.log(filter);
	// 		this.changeFilter.emit(filter);
	// 	});

	// this.filterForm.get('name')?.valueChanges.subscribe(console.log);
	// }

	// private initBrandsFormArray() {
	// 	const brandsControls: FormControl<boolean>[] = this.brands?.map(() => new FormControl<boolean>(false)) as FormControl<boolean>[];

	// 	this.filterForm.setControl('brands', new FormArray(brandsControls));
	// }

	// private getBrandsListFromCheckboxes(brandsCheckboxes: boolean[] | undefined): IProductsFilter['brands'] {
	// 	if (!this.brands || !brandsCheckboxes) {
	// 		return [];
	// 	}

	// 	return this.brands.filter((_, index) => brandsCheckboxes[index]);
	// }
}
