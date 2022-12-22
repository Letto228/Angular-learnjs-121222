import { Component } from '@angular/core';
import { productMock } from '../../shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	readonly card = productMock;

	onClick(event: MouseEvent) {
		event.stopPropagation();
		console.log(event);
	}
}
