import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { isStringAsyncValidator } from '../../shared/validators/is-string-async.validator';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
	readonly products$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('subcategoryId')),
		tap(id => {
			this.productsStoreService.loadProducts(id);
		}),
		switchMap(() => this.productsStoreService.products$),
	);

	readonly searchFormControl = new FormControl('', {
		validators: [Validators.minLength(3), Validators.required],
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
	) {}

	trackById(_: number, item: IProduct) {
		return item._id;
	}
}
