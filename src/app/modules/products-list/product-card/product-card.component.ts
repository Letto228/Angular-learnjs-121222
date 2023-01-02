import { Component, EventEmitter, Input, Output, OnChanges, SimpleChange, SimpleChanges, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent implements OnInit {
	// readonly product = productMock;
	@Input() product: IProduct | undefined;
	@Output() productClick = new EventEmitter<string>();

	public activeImageUrl: string | undefined;
	public activeImageIndex: number | undefined;
  
	onProductBuy(event: Event, id?: string) {
	  this.productClick.emit(id);
	  event.stopPropagation();
  
	  if (id) {
		console.log('Buy ' + id);
	  }
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}

	ngOnInit() {
		this.activeImageIndex = 0;
		this.activeImageUrl = this.product?.images[this.activeImageIndex].url;
	}

	changeImage(direction: number) {
		if (typeof(this.activeImageIndex) === 'undefined') {
			this.activeImageIndex = 0;
		}

		let imagesLength : number = this.product ? this.product?.images.length : 0;

		this.activeImageIndex = this.activeImageIndex + direction;
		
		if (this.activeImageIndex < 0) {
			this.activeImageIndex = imagesLength - 1;
		}

		if (this.activeImageIndex >= imagesLength) {
			this.activeImageIndex = 0;
		}

		this.activeImageUrl = this.product?.images[this.activeImageIndex].url;
	}
}
