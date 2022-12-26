import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent implements OnInit {
	@Input() product: IProduct | undefined;
	@Output() buyProduct = new EventEmitter<void>();

	productPhotoUrl: string | undefined;

	constructor() {}

	ngOnInit() {
		this.productPhotoUrl = this.product ? this.product.images[0].url : undefined;
	}

	onProductBuy(event: Event) {
		event.stopPropagation();

		this.buyProduct.emit();
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
