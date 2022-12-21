import {Component} from '@angular/core';
import {productMock} from "../shared/products/product.mock";

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent {
	readonly card = productMock;
	public activeImg = this.card.images[0].url;

	buy(event: Event, id: string) {
		event.stopPropagation();
		console.log('buy action:', id);
	}

}