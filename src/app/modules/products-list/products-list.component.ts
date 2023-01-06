import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productsMock } from '../../shared/products/products.mock';
import { ScrollDirection } from '../../shared/infinite-scroll/infinite-scroll.directive';

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

	onListScrolled(direction: ScrollDirection) {
		console.log(direction);
		if (direction === ScrollDirection.down) {
			this.loadProducts();
		}
	}

	private loadProducts() {
		setTimeout(() => {
			this.products = [...(this.products || []), ...productsMock];
		}, 3000);
	}
}
