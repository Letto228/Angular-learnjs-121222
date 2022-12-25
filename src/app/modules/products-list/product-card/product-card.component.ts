import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IProduct} from "../../../shared/products/product.interface";

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	//readonly product = productMock;
	@Input() product: IProduct | undefined;

	@Output() productBuy = new EventEmitter<Event>();

	onProductBuy(event: Event) {
		this.productBuy.emit(event);
		event.stopPropagation();

		console.log('Buy');
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
