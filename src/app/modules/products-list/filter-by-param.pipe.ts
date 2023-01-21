import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterByParam',
})
export class FilterByParamPipe<T> implements PipeTransform {
	transform(value: T[], filterValue: T[keyof T], fieldName: keyof T): T[] {
		if (!value) {
			return [];
		}

		if (!filterValue || !fieldName) {
			return value;
		}

		const filtered = value.filter(item => {
			if (Object.prototype.hasOwnProperty.call(item, fieldName)) {
				if (typeof filterValue === 'string') {
					const keyValue = String(item[fieldName]).toLowerCase();
					return keyValue.includes(filterValue);
				} else {
					return item[fieldName] === filterValue;
				}
			}

			return false;
		});

		return filtered;
	}
}
