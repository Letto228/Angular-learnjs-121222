import { Component } from '@angular/core';
import { productMock } from '../../shared/products/product.mock';
import { IProduct } from '../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	currentImageIndex = 0;

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

	prev(event: MouseEvent) {
		event.stopPropagation();
		this.currentImageIndex--;
	}

	next(event: MouseEvent) {
		event.stopPropagation();
		this.currentImageIndex++;
	}

	get firstSlide(): boolean {
		return this.currentImageIndex === 0;
	}

	get lastSlide(): boolean {
		return this.currentImageIndex === this.product.images.length - 1;
	}
}
