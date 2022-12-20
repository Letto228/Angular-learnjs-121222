import { Component } from '@angular/core';
import { productMock } from '../../shared/products/product.mock';
import { IProduct } from '../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	readonly card: IProduct = productMock;

	buy(event: MouseEvent, id: string) {
		event.stopPropagation();
		console.log(id);
	}
}
