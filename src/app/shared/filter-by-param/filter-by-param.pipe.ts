import { Pipe, PipeTransform } from '@angular/core';
import { filterObject } from './filter-bject';

@Pipe({
	name: 'filterByParam',
})
export class FilterByParamPipe implements PipeTransform {
	transform<T>(value: T[], filterValue: T[keyof T], filterParam: keyof T): T[] {
		return value.filter((item: T) => {
			switch (typeof item) {
				case 'object':
					return filterObject<T>(item, filterValue, filterParam);
				default:
					return false;
			}
		});
	}
}
