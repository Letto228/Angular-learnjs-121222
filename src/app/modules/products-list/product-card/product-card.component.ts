import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@Input() product: IProduct | undefined;

	@Output() productBuyClick = new EventEmitter<string>();

	onProductBuy(event: Event, id: string | undefined) {
		this.productBuyClick.emit(id);
		event.stopPropagation();
		console.log('Buy');
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}

	getImageUrl(): string {
		if (this.product) {
			return this.product?.images[0].url;
		}
		return '';
	}
}
