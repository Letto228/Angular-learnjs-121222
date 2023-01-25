import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productsMock } from '../../shared/products/products.mock';
import { ScrollDirection } from 'src/app/shared/insert-scroll/scroll.consts';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent implements OnInit {
	products: IProduct[] | null = null;

	ngOnInit() {
		this.products = productsMock;
	}
	onLoadBorderData(direction: ScrollDirection) {
		console.log('onLoadBorderData', direction);
	}
	get productsList(): IProduct[] | null {
		return this.products;
	}
}
