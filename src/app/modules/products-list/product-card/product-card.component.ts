import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent implements OnChanges {
	@Input() product: IProduct | undefined;
	@Output() buyProduct = new EventEmitter<string>();

	productPhotoUrl: string | undefined;

	constructor() {}

	ngOnChanges({ product }: SimpleChanges) {
		if (product) {
			this.productPhotoUrl = this.product ? this.product.images[0].url : undefined;
		}
	}

	onProductBuy(event: Event) {
		event.stopPropagation();

		const productId = this.product?._id;
		if (productId) {
			this.buyProduct.emit(productId);
		}
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
