import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, switchMap } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
	// readonly products$ = this.productsStoreService.products$;
	// readonly products$ = this.activatedRoute.data.pipe(
	// 	tap(console.log),
	// 	map<{products: IProduct[]}, IProduct[]>(data => data.products),
	// );

	readonly products$ = this.activatedRoute.paramMap.pipe(
		map(params => params.get('category')),
		tap(category => {
			this.productsStoreService.loadProducts(category);
		}),
		switchMap(() => this.productsStoreService.products$),
	);

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute, // private readonly activatedRoute: ActivatedRoute,
	) {}

	trackById(_: number, item: IProduct) {
		return item._id;
	}

	navigateToProduct() {
		this.router.navigate(['/product', 'id']);
		// this.router.navigateByUrl('/product/id');
	}
}
