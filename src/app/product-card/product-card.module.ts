import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatSliderModule, MatIconModule],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
