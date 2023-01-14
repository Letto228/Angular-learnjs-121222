import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertScrollDirective } from './insert-scroll.directive';

@NgModule({
	declarations: [InsertScrollDirective],
	imports: [CommonModule],
	exports: [InsertScrollDirective],
})
export class InsertScrollModule {}
