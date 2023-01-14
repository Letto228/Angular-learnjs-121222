import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardModule } from './product-card/product-card.module';
import { DumpNgIfModule } from '../../shared/dump-ng-if/dump-ng-if.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InsertScrollModule } from 'src/app/shared/insert-scroll/insert-scroll.module';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [CommonModule, ProductCardModule, MatProgressSpinnerModule, DumpNgIfModule, InsertScrollModule],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
