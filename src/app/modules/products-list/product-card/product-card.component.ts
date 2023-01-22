import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/products/product.interface';
import { productMock } from 'src/app/shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@Input() cardInfo: IProduct | undefined;

	get product() {
		return this.cardInfo ? this.cardInfo : productMock;
	}

	@Output() isProductBoughtChange = new EventEmitter<string>();

	onProductBuy(event: Event) {
		this.isProductBoughtChange.emit(this.product._id);
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
