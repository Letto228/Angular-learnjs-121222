import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterByParam',
})
export class FilterByParamPipe implements PipeTransform {
	transform<T>(value: T[], filterValue: T[keyof T], filterName: keyof T): T[] | null {
		return value?.length ? value.filter(item => item[filterName] === filterValue) : null;
	}
}
