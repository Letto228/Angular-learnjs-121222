import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterByParam',
})
export class FilterByParamPipe implements PipeTransform {
	transform<T>(
		data: T[] | null | undefined,
		attributeValue: T[keyof T],
		attributeName: keyof T,
	): T[] | null | undefined {
		return data?.filter(element => {
			const value = element[attributeName];
			return value == attributeValue;
		});
	}
}
