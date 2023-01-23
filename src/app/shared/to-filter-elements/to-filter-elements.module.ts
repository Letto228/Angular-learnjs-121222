import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFilterElementsPipe } from './to-filter-elements.pipe';

@NgModule({
	declarations: [ToFilterElementsPipe],
	imports: [CommonModule],
	exports: [ToFilterElementsPipe],
})
export class ToFilterElementsModule {}
