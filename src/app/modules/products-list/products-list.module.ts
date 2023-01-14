import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardModule } from './product-card/product-card.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PagenatorModule } from 'src/app/shared/pagenator/pagenator.module';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [CommonModule, ProductCardModule, MatProgressSpinnerModule, PagenatorModule, MatIconModule, MatButtonModule],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
