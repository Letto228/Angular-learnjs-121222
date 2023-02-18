import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
	//readonly products$ = this.productsStoreService.products$;
	readonly products$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('id')),
		tap(id => {
			console.log('idpr', id);
		}),
		tap(id => {
			this.productsStoreService.loadProducts(id);
		}),
		switchMap(() => this.productsStoreService.products$),
	);

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute,
	) {}

	trackById(_: number, item: IProduct) {
		return item._id;
	}

	navigateToProduct() {
		this.router.navigate(['/product', 'id']);
	}
}
