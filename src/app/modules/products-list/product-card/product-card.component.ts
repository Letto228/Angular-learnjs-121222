import { Component, EventEmitter, Input, Output } from '@angular/core';
import { productMock } from '../../../shared/products/product.mock';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@Input() product?: IProduct;
	@Output() productSelected = new EventEmitter<IProduct>();

	onProductBuy(event: Event, selectedProduct: IProduct | undefined) {
		event.stopPropagation();

		if (selectedProduct) {
			this.productSelected.emit(selectedProduct);
		}
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}

	getImageUrl(): string {
		return this.product && this.product.images.length > 0 ? this.product.images[0].url : '';
	}
}
