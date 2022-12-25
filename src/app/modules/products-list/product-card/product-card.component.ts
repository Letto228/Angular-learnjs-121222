import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/products/product.interface';
import { productMock } from '../../../shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@Input() product: IProduct | undefined;
	@Output() productBuy = new EventEmitter<Event>();

	onProductBuy(event: Event) {
		this.productBuy.emit(event);
		event.stopPropagation();

		console.log('Buy', this.product);
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
