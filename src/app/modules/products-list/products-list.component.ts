import { Component } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productMock } from '../../shared/products/product.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent {
	readonly products: IProduct[] = [productMock, productMock, productMock];
	private _cart: IProduct[] = [];

	addToCart(product: IProduct) {
		this._cart.push(product);
	}

	get cart(): IProduct[] {
		return this._cart;
	}
}
