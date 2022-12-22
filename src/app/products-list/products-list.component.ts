import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/product/product.interface';
import { productMock } from '../shared/product/product.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent {
	public productsList: IProduct[] = [productMock, productMock];
}
