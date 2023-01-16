import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { productsMock } from '../../shared/products/products.mock';
import { toJSON } from '../../shared/to-json/to-json';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	// readonly productsStoreService = new ProductsStoreService();
	readonly products$ = this.productsStoreService.products$;

	filterValue: any = 5;
	filterName = '';

	constructor(
		// @Inject(ChangeDetectorRef) private changeDetectorRef: ChangeDetectorRef,
		// @Inject(ProductsStoreService) private productsStoreService: ProductsStoreService,
		// @Inject('ProductsStoreService') private productsStoreServiceString: ProductsStoreService,
		// @Inject('value') private value: IProduct,
		// @Inject('second') private second: number,
		// @Inject('multi') private multi: number[],
		// private changeDetectorRef: ChangeDetectorRef,
		private productsStoreService: ProductsStoreService,
	) {
		// console.log(this.productsStoreService === this.productsStoreServiceString);
		// console.log(this.productsStoreServiceString);
		// console.log(this.value);
		// console.log(this.second);
		// console.log(this.multi);
	}

	ngOnInit() {
		this.productsStoreService.loadProducts();
		// setTimeout(() => {
		// 	this.products = productsMock;
		// 	this.changeDetectorRef.markForCheck();
		// }, 3000);
	}

	trackById(_: number, item: IProduct) {
		return item._id;
	}

	getJson = toJSON;
}
