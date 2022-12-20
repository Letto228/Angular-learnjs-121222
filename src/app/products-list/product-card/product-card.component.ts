import { Component } from '@angular/core';
import { productMock } from './../../shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	readonly id = productMock._id;
	readonly name = productMock.name;
	readonly price = productMock.price;
	readonly rating = productMock.rating;
	readonly imgSrc = productMock.images.at(0)?.url;
	// readonly imgSrc = 'https://avatars.mds.yandex.net/i?id=b1ba5d199d0c1598bb5762fc6faf2f5526a0cf1a-5513755-images-thumbs&n=13';

	buyProduct(id: string) {
		// event.stopPropagation();
		console.log('Вы только что купили: ' + id);
	}
}
