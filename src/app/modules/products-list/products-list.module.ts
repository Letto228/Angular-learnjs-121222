import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardModule } from './product-card/product-card.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaginatorModule } from '../../shared/paginator/paginator.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [
		CommonModule,
		ProductCardModule,
		MatProgressSpinnerModule,
		PaginatorModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
	],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
