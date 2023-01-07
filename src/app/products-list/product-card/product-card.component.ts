import { Component } from '@angular/core';
import { productMock } from 'src/app/shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
	interpolation: ['{{', '}}'],
})
export class ProductCardComponent {
	readonly card = productMock;
	imageIndex = 0;

	buyProduct(event: Event) {
		event.stopPropagation();
		console.log(event);
	}

	previousImage(event: Event) {
		event.stopPropagation();
		if (this.imageIndex + 1 == this.card.images.length - 1) {
			this.imageIndex = 0;
			return;
		}
		this.imageIndex += 1;
	}

	nextImage(event: Event) {
		event.stopPropagation();
		if (this.imageIndex == 0) {
			this.imageIndex = this.card.images.length - 1;
			return;
		}
		this.imageIndex -= 1;
	}
}
