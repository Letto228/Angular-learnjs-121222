import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterByParam',
})
export class FilterByParamPipe implements PipeTransform {
	transform<T>(value: T[], filterValue: any, filterName: string): T[] | null {
		if (value && value.length) {
			return value.filter(item => item[filterName as keyof T] === filterValue);
		}
		return null;
	}
}
