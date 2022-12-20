import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
	declarations: [ProductCardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatBadgeModule],
	exports: [ProductCardComponent],
})
export class ProductCardModule {}
