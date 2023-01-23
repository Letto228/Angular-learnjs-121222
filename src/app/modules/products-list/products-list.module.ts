import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardModule } from './product-card/product-card.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PaginationModule } from '../../shared/pagination/pagination.module';
import { ToJsonModule } from '../../shared/to-json/to-json.module';
import { ToFilterElementsModule } from 'src/app/shared/to-filter-elements/to-filter-elements.module';

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
		ToFilterElementsModule,
	],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
