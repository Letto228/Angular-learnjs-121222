import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [ProductCardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
	exports: [ProductCardComponent],
})
export class ProductCardModule {}
