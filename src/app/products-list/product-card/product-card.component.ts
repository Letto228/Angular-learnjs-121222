import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../shared/product/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@Input() product?: IProduct;

	public getFirstImageUrl(): string {
		if (this.product?.images.length) {
			return this.product.images[0].url;
		}

		return '';
	}

	public openProductPage(event: MouseEvent): void {
		console.log('Open Product Page');
	}

	public addProductToCart(event: MouseEvent): void {
		event.stopPropagation();
		console.log('Add Product To Cart');
	}
}
