import { Component } from '@angular/core';
import { productMock } from '../../shared/products/product.mock';
import { IProduct } from '../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	product: IProduct = productMock;

	addToCart(event: MouseEvent) {
		event.stopPropagation();
		console.log('addToCart');
	}

	changeRating(event: MouseEvent) {
		event.stopPropagation();
		console.log('changeRating');
	}

	share(event: MouseEvent) {
		event.stopPropagation();
		console.log('feedBack');
	}

	openCard() {
		console.log('openCard');
	}
}
