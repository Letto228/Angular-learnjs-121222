import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFilterComponent } from './products-filter.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CounterInputModule } from '../../../shared/counter-input/counter-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ProductsFilterComponent],
	imports: [CommonModule, MatInputModule, MatCheckboxModule, CounterInputModule, ReactiveFormsModule, FormsModule],
	exports: [ProductsFilterComponent],
})
export class ProductsFilterModule {}
