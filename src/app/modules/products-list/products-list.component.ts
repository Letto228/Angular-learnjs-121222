import { Component } from '@angular/core';
import { productMock } from '../../shared/products/product.mock';
import { IProduct } from '../../shared/products/product.interface';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent {
	readonly product: IProduct | undefined = productMock;

	buyProduct() {
		console.log('Buy');
	}
}
