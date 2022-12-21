import { Component } from '@angular/core';
import { productMock } from 'src/app/shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	readonly img = productMock.images[0].url;
	readonly name = productMock.name;
	readonly price = productMock.price;
	readonly rating = productMock.rating;

	didPurchase(event: MouseEvent) {
		window.location.href = 'https://learn.javascript.ru/';
		console.log(event);
	}
}
