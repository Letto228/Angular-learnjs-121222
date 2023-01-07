import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productsMock } from '../../shared/products/products.mock';

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

	public loadTopProducts(): void {
		console.log('do nothing!');
	}

	public loadBottomProducts(): void {
		console.log('load bottom products');
		this.loadProducts();
	}

	private loadProducts(): void {
		if (this.products === null) {
			this.products = [];
		}

		setTimeout(() => {
			this.products?.push(...productsMock);
		}, 3000);
	}
}
