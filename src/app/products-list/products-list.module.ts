import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardModule } from './product-card/product-card.module';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [CommonModule, ProductCardModule],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
