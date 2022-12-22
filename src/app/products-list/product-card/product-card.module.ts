import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [ProductCardComponent],
	exports: [ProductCardComponent],
	imports: [CommonModule, MatCardModule, MatIconModule],
})
export class ProductCardModule {}
