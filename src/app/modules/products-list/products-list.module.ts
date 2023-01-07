import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardModule } from './product-card/product-card.module';
import { DumpNgIfModule } from '../../shared/dump-ng-if/dump-ng-if.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfiniteScrollModule } from '../../shared/infinite-scroll/infinite-scroll.module';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [CommonModule, ProductCardModule, MatProgressSpinnerModule, DumpNgIfModule, InfiniteScrollModule],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
