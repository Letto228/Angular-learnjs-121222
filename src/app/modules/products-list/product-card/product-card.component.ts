import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/products/product.interface';
import { IProductImage } from 'src/app/shared/products/product-image.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	// readonly product = productMock;

	@Input() product: IProduct | undefined;
	@Output() productClick = new EventEmitter<Event>();

	onProductBuy(event: Event) {
		this.productClick.emit(event);
		event.stopPropagation();
		console.log('Buy');
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
