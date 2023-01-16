import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByParamPipe } from './filter-by-param.pipe';

@NgModule({
	declarations: [FilterByParamPipe],
	exports: [FilterByParamPipe],
	imports: [CommonModule],
})
export class FilterByParamModule {}
