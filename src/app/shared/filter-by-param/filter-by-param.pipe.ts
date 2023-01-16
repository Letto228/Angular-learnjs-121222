import { Pipe, PipeTransform } from '@angular/core';
import { WithWildcards } from './wildcard.type';
import { filterObject } from './filter-bject';

@Pipe({
	name: 'filterByParam',
})
export class FilterByParamPipe implements PipeTransform {
	transform<T>(value: T[], filterValue: unknown, filterParam: string): T[] {
		return value.filter((item: T) => {
			switch (typeof item) {
				case 'object':
					return filterObject<T>(item as WithWildcards<T>, filterValue, filterParam);
				default:
					return false;
			}
		});
	}
}
