import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap, tap } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { isStringAsyncValidator } from '../../shared/validators/is-string-async.validator';
import { isStringValidator } from '../../shared/validators/is-string.validator';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	readonly products$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('subcategoryId')),
		tap(id => {
			this.productsStoreService.loadProducts(id);
		}),
		switchMap(() => this.productsStoreService.products$),
	);

	readonly searchFormControl = new FormControl('', {
		validators: [Validators.minLength(3), Validators.required],
		// asyncValidators: [this.isStringAsyncValidator.bind(this)],
		asyncValidators: [isStringAsyncValidator],
		updateOn: 'submit',
	});
	readonly searchedText$ = this.searchFormControl.valueChanges.pipe(
		startWith(this.searchFormControl.value),
		debounceTime(300),
		distinctUntilChanged(),
	);
	readonly errors$ = this.searchFormControl.statusChanges.pipe(
		map(status => (status === 'INVALID' ? this.searchFormControl.errors : null)),
	);

	searchedText = 'Мешок';

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly changeDetectorRef: ChangeDetectorRef,
	) // @Inject('name') private readonly name: string,
	{
		// console.log('ProductsListComponent - ', this.name);
	}

	ngOnInit() {
		this.productsStoreService.loadProducts();
		// this.searchFormControl.setValue(300);
		// this.searchFormControl.valueChanges.subscribe(console.log);
	}

	trackById(_: number, item: IProduct) {
		return item._id;
	}

	// private isStringAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
	// 	return isStringAsyncValidator(control).pipe(
	// 		tap(() => {
	// 			this.changeDetectorRef.markForCheck();
	// 		})
	// 	)
	// }
}
