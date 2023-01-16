import { ChangeDetectionStrategy, Component, Host, Inject, OnInit, Optional, SkipSelf } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: 'name',
			useValue: 'ProductsListComponentElementInjector',
		},
	],
})
export class ProductsListComponent implements OnInit {
	readonly products$ = this.productsStoreService.products$;

	// products: IProduct[] | undefined | null = null;

	constructor(
		private productsStoreService: ProductsStoreService,
		@Optional() @SkipSelf() @Host() @Inject('name') private name: string,
	) {
		console.log(this.name);
	}

	ngOnInit() {
		this.productsStoreService.loadProducts();
	}

	trackById(_: number, item: IProduct) {
		return item._id;
	}
}
