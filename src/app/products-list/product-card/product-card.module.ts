import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProductCardComponent } from './product-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ProductCardComponent],
	imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
	exports: [ProductCardComponent],
})
export class ProductCardModule {}
