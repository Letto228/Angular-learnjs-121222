import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@Input() product!: IProduct;

	@Output() productBuy = new EventEmitter<IProduct['_id']>();

	onProductBuy(event: Event) {
		event.stopPropagation();

		this.productBuy.emit(this.product._id);
	}

	isStarActive(starIndex: number): boolean {
		return this.product.rating >= starIndex;
	}
}
