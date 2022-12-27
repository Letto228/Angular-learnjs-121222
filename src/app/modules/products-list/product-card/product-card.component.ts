import { Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@HostBinding('class.empty') get isProductEmpty(): boolean {
		return this.product === undefined;
	}
	@Input() product: IProduct | undefined;
	@Output() addedToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>();

	onProductBuy(event: Event) {
		event.stopPropagation();
		if (!this.product) {
			return;
		}
		this.addedToCart.emit(this.product);
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
