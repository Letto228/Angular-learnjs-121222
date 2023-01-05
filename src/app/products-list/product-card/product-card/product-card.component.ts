import { Component } from '@angular/core';
import { productMock } from '../../../shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	readonly product = productMock;
	currImageSrc = this.product.images[0].url;
	imageIndex = 0;

	nextImg(event: MouseEvent) {
		event.stopPropagation();
		const imageArrLength = this.product.images.length;
		this.imageIndex++;
		if (this.imageIndex >= imageArrLength) {
			this.imageIndex = 0;
		}

		this.currImageSrc = this.product.images[this.imageIndex].url;
	}

	addToCard(event: MouseEvent) {
		event.stopPropagation();
		console.log('Product added to card!');
	}
}
