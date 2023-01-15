import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardModule } from './product-card/product-card.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PaginationModule } from 'src/app/shared/pagination/pagination.module';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [
		CommonModule,
		ProductCardModule,
		MatProgressSpinnerModule,
		MatButtonModule,
		MatIconModule,
		PaginationModule,
	],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
