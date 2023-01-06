import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@Input() product: IProduct | undefined;
	@Output() buyClick = new EventEmitter<Event>();

	onProductBuy(event: Event) {
		event.stopPropagation();
		this.buyClick.emit(event);
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product?.rating >= starIndex);
	}
}
