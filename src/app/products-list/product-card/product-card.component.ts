import { Component } from '@angular/core';
import { productMock } from './../../shared/products/product.mock';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  readonly card = productMock;
  public activeImageSrc = this.card.images[0].url;

  onImageSliderChange(event: Event) {
    const sliderValue = (event.target as HTMLInputElement).ariaValueText;
    const imageIndex = sliderValue ? Number(sliderValue) : 0;
    console.log(sliderValue, imageIndex);
    this.activeImageSrc = this.card.images[imageIndex].url;
  }

  buy(event: Event, id: string) {
    event.stopPropagation();

    console.log(id);
  }
}
