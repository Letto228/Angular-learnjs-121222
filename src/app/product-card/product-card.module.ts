import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [ProductCardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, MatSliderModule, MatIconModule, ButtonModule, CarouselModule],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
