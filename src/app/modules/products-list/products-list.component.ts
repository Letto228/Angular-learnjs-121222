import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, takeUntil } from 'rxjs';
import { BrandsService } from '../../shared/brands/brands.service';
import { DestroyService } from '../../shared/destroy/destroy.service';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { loadProducts } from '../../shared/store/products/products.actions';
import { productsAllSelector, productsFeatureSelector } from '../../shared/store/products/products.selectors';
import { PRODUCTS_FEATURE } from '../../shared/store/products/products.state';
import { IState } from '../../shared/store/reducer';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [DestroyService],
})
export class ProductsListComponent implements OnInit {
	// readonly products$ = this.activatedRoute.paramMap.pipe(
	// 	map(paramMap => paramMap.get('subcategoryId')),
	// 	tap(id => {
	// 		this.productsStoreService.loadProducts(id);
	// 	}),
	// 	switchMap(() => this.productsStoreService.products$),
	// );
	// readonly brands$ = this.activatedRoute.paramMap.pipe(
	// 	map(paramMap => paramMap.get('subcategoryId')),
	// 	tap(id => {
	// 		this.brandsService.loadBrands(id);
	// 	}),
	// 	switchMap(() => this.brandsService.brands$),
	// );
	readonly products$ = this.store$.pipe(select(productsAllSelector));
	readonly brands$ = this.brandsService.brands$;

	constructor(
		// private readonly productsStoreService: ProductsStoreService,
		private readonly brandsService: BrandsService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly destroy$: DestroyService,
		private readonly store$: Store<IState>,
	) {}

	ngOnInit(): void {
		// this.store$
		// 	.pipe(
		// 		select(productsAllSelector),
		// 	)
		// 	.subscribe(console.log);
		this.activatedRoute.paramMap
			.pipe(
				map(paramMap => paramMap.get('subcategoryId')),
				takeUntil(this.destroy$),
			)
			.subscribe(subcategoryId => {
				this.store$.dispatch(loadProducts(subcategoryId));
				// this.productsStoreService.loadProducts(subcategoryId);
				this.brandsService.loadBrands(subcategoryId);
			});
	}

	trackById(_: number, item: IProduct) {
		return item._id;
	}
}
