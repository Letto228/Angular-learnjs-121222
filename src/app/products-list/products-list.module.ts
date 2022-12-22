import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardModule } from './product-card/product-card.module';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [CommonModule, MatGridListModule, ProductCardModule],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
