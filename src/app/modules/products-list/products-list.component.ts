import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, takeUntil } from 'rxjs';
import { BrandsService } from '../../shared/brands/brands.service';
import { DestroyService } from '../../shared/destroy/destroy.service';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';

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
	readonly products$ = this.productsStoreService.products$;
	readonly brands$ = this.brandsService.brands$;

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly brandsService: BrandsService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly destroy$: DestroyService,
	) {}

	ngOnInit(): void {
		this.activatedRoute.paramMap
			.pipe(
				map(paramMap => paramMap.get('subcategoryId')),
				takeUntil(this.destroy$),
			)
			.subscribe(subcategoryId => {
				this.productsStoreService.loadProducts(subcategoryId);
				this.brandsService.loadBrands(subcategoryId);
			});
	}

	trackById(_: number, item: IProduct) {
		return item._id;
	}
}
