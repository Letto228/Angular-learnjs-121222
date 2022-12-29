import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from '../../../shared/carousel/carousel.module';

@NgModule({
	declarations: [ProductCardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, CarouselModule],
	exports: [ProductCardComponent],
})
export class ProductCardModule {}
