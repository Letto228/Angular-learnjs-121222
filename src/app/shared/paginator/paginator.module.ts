import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorDirective } from './paginator.directive';

@NgModule({
	declarations: [PaginatorDirective],
	imports: [CommonModule],
	exports: [PaginatorDirective],
})
export class PaginatorModule {}
