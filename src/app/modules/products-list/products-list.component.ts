import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	// readonly products$ = this.productsStoreService.products$;
	readonly products$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('subcategoryId')),
		tap(id => {
			this.productsStoreService.loadProducts(id);
		}),
		switchMap(() => this.productsStoreService.products$),
	);
	// readonly products$ = this.activatedRoute.data.pipe(
	// 	tap(console.log),
	// 	map<{products: IProduct[]}, IProduct[]>(data => data.products),
	// );

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute,
	) {}

	ngOnInit() {
		this.productsStoreService.loadProducts();
	}

	trackById(_: number, item: IProduct) {
		return item._id;
	}

	navigateToProduct() {
		this.router.navigate(['/product', 'id']);
		// this.router.navigateByUrl('/product/id');
	}
}
