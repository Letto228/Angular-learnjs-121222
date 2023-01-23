import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';

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

	constructor(
		private readonly productsStoreService: ProductsStoreService,
		private readonly activatedRoute: ActivatedRoute,
	) {}

	ngOnInit() {
		this.productsStoreService.loadProducts();
	}

	trackById(_: number, item: IProduct) {
		return item._id;
	}
}
