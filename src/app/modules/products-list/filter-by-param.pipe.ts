import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterByParam',
})
export class FilterByParamPipe<T> implements PipeTransform {
	transform(value: T[], filterValue: string, fieldName: keyof T): T[] {
		if (!value) {
			return [];
		}

		if (!filterValue || !fieldName) {
			return value;
		}

		const filtered = value.filter(item => {
			if (Object.prototype.hasOwnProperty.call(item, fieldName)) {
				const keyValue = String(item[fieldName]).toLowerCase();
				return keyValue === filterValue || keyValue.indexOf(filterValue) >= 0;
			}

			return false;
		});

		return filtered;
	}
}
