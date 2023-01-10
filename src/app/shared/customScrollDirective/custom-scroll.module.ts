import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInfinityScrollDirective } from './custom-scroll.directive';

@NgModule({
	declarations: [CustomInfinityScrollDirective],
	imports: [CommonModule],
	exports: [CustomInfinityScrollDirective],
})
export class CustomScrollModule {}
