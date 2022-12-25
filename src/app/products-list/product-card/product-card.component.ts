import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { AfterContentInit } from '@angular/core';
import type { IProduct } from 'src/app/shared/products/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements AfterContentInit {
  @Input() product: IProduct | undefined;
  @Output() productClick = new EventEmitter<Event>();

  public activeImageSrc: string | undefined = undefined;

  onImageSliderChange(event: Event) {
    const sliderValue = (event.target as HTMLInputElement).ariaValueText;
    const imageIndex = sliderValue ? Number(sliderValue) : 0;
    this.activeImageSrc = this.product?.images[imageIndex].url;
  }

  buy(event: Event, id?: string) {
    this.productClick.emit(event);
    event.stopPropagation();

    if (id) console.log(id);
  }

  ngAfterContentInit() {
    this.activeImageSrc = this.product?.images[0].url;
  }
}
