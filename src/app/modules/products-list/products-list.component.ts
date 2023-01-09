import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productsMock } from '../../shared/products/products.mock';
import { LoadDirection } from '../../shared/infinite-scroll/load-direction';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent implements OnInit {
	products: IProduct[] | null = null;

	ngOnInit() {
		this.loadProducts();
	}

	get productsList(): IProduct[] | null {
		console.log('calc');
		return this.products;
	}

	public loadProducts(direction?: LoadDirection): void {
		if (this.products === null) {
			this.products = [];
		}

		if (direction === LoadDirection.Before) {
			console.log('do nothing');
			return;
		}

		setTimeout(() => {
			this.products?.push(...productsMock);
		}, 3000);
	}
}
