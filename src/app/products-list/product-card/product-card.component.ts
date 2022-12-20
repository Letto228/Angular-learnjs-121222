import { Component } from '@angular/core';
import { productMock } from './../../shared/products/product.mock';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  readonly card = productMock;
  public activeImageSrc: string;

  constructor() {
    this.activeImageSrc = this.card.images[0].url;
  }

  sliderHandler(event: any) {
    this.activeImageSrc = this.card.images[event.target.ariaValueText].url;
    console.log(event.target.ariaValueText, this.card.images[event.target.ariaValueText].url);
  }

  buy(event: Event, id: string) {
    event.stopPropagation();

    console.log(id);
  }
}
