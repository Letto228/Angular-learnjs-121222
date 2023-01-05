import { Component } from '@angular/core';
import { productMock } from '../../shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	readonly card = productMock;

	buy(id: string) {
		// event.stopPropagation();
		console.log(id);
	}
}
