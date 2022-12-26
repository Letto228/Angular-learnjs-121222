import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent implements OnInit {
	@HostBinding('class.empty') isProductEmpty = false;
	@Input() product: IProduct | undefined;
	@Output() addedToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>();
	ngOnInit(): void {
		this.isProductEmpty = this.productEmpty;
	}

	onProductBuy(event: Event) {
		event.stopPropagation();
		this.addedToCart.emit(this.product);
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}

	get productEmpty(): boolean {
		return this.product === undefined;
	}
}
