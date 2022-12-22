import { Component } from '@angular/core';
import { IProductImage } from 'src/app/shared/products/product-image.interface';
import { IProduct } from 'src/app/shared/products/product.interface';
import { productMock } from '../../shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	readonly card: IProduct = productMock;

	readonly images = this.card.images.map((img: IProductImage) => {
		return {
			image: img.url,
			thumbImage: img.url,
		};
	});
	readonly starIcon = '../../../assets/seastar.svg';

	onProductBuy = (event: MouseEvent) => {
		event.stopPropagation();
		console.log('Продукт Куплен');
	};
}
