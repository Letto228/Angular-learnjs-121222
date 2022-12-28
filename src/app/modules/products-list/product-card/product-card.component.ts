import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { IProduct } from 'src/app/shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent implements OnChanges {
	// readonly product = productMock;
	@Input() product: IProduct | undefined;
	@Output() productClick = new EventEmitter<Event>();

	public activeImageUrl: string | undefined;
	public activeImageIndex: number | undefined;
  
	onProductBuy(event: Event, id?: string) {
	  this.productClick.emit(event);
	  event.stopPropagation();
  
	  if (id) {
		console.log('Buy ' + id);
	  }
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product?.rating >= starIndex);
	}

	ngOnChanges() {
		this.activeImageIndex = 0;
		this.activeImageUrl = this.product?.images[this.activeImageIndex].url;
	}

	imagesLeft() {
		if (this.activeImageIndex == 0 && this.product?.images.length){
			this.activeImageIndex = this.product?.images.length - 1;
		} else if (this.activeImageIndex) {
			this.activeImageIndex = this.activeImageIndex - 1;
		} else {
			this.activeImageIndex = 0;
		}
		this.activeImageUrl = this.product?.images[this.activeImageIndex].url;
	}

	imagesRight() {
		if (this.product?.images.length && this.activeImageIndex == this.product?.images.length - 1){
			this.activeImageIndex = 0;
		} else if (typeof(this.activeImageIndex) == 'number') {
			this.activeImageIndex = this.activeImageIndex + 1;
		} else {
			this.activeImageIndex = 0;
		}
		this.activeImageUrl = this.product?.images[this.activeImageIndex].url;
	}
}
