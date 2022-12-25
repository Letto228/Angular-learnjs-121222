import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@Input() product: IProduct | undefined;
	@Output() buyProduct = new EventEmitter<Event>();

	onProductBuy(event: Event) {
		event.stopPropagation();

		this.buyProduct.emit(event);
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
