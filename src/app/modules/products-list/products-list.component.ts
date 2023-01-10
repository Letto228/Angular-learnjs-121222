import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productsMock } from '../../shared/products/products.mock';
import { LoadDirection } from 'src/app/shared/infinity-scroll/scroll-direction.enum';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent implements OnInit {
	products: IProduct[] | null = null;

	ngOnInit() {
		setTimeout(() => {
			this.products = productsMock;
		}, 3000);
	}

	get productsList(): IProduct[] | null {
		return this.products;
	}

	onListLoaded(direction: LoadDirection) {
		if (direction === LoadDirection.down) {
			this.addProducts();
		}
	}

	private addProducts() {
		setTimeout(() => {
			this.products = [...(this.products || []), ...productsMock];
		}, 3000);
	}
}
