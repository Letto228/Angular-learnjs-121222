import { Pipe, PipeTransform } from '@angular/core';
import { isString } from './is-string';

@Pipe({
	name: 'filterByParam',
})
export class FilterByParamPipe implements PipeTransform {
	transform<T, P extends keyof T>(
		items: T[] | undefined | null,
		searchValue: T[P] | null,
		searchingProperty: P,
	): T[] | undefined | null {
		return items?.filter(item => {
			const propertyValue = item[searchingProperty];

			return isString(propertyValue)
				? propertyValue.toUpperCase().includes((searchValue as unknown as string)?.toUpperCase())
				: propertyValue === searchValue;
		});
	}
}
