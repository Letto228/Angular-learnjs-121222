import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [ProductCardComponent],
	imports: [CommonModule, MatCardModule],
	exports: [ProductCardComponent],
})
export class ProductCardModule {}
