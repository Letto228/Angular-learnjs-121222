import { Component } from '@angular/core';
import { productMock } from './../../shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	readonly productMock = productMock;

	buyProduct(id: string) {
		console.log('Вы только что купили: ' + id);
	}
}
