import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardModule } from './product-card/product-card.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PaginationModule } from '../../shared/pagination/pagination.module';
import { FilterByParamModule } from '../../shared/filter-by-param/filter-by-param.module';
import { RouterModule } from '@angular/router';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsFilterModule } from './products-filter/products-filter.module';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [
		CommonModule,
		ProductCardModule,
		MatProgressSpinnerModule,
		MatIconModule,
		MatButtonModule,
		PaginationModule,
		FilterByParamModule,
		RouterModule,
		ProductsListRoutingModule,
		ProductsFilterModule,
	],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
