import { Component } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productMock } from '../../shared/products/product.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent {
	public productsList: IProduct[] = [productMock];

	public onProductSelected(product: IProduct): void {
		console.log(`product ${product.name} added to cart`);
	}
}
