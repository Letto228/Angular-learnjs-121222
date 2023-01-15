import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardModule } from './product-card/product-card.module';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaginationModule } from 'src/app/shared/pagination/pagination.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [
		CommonModule,
		ProductCardModule,
		MatIconModule,
		MatProgressSpinnerModule,
		PaginationModule,
		MatButtonModule,
	],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
