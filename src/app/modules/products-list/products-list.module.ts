import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardModule } from './product-card/product-card.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PaginationModule } from '../../shared/pagination/pagination.module';
import { ToJsonModule } from '../../shared/to-json/to-json.module';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [
		CommonModule,
		ProductCardModule,
		MatProgressSpinnerModule,
		MatIconModule,
		MatButtonModule,
		PaginationModule,
		ToJsonModule,
	],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
