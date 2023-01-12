import { Pipe, PipeTransform } from '@angular/core';
import { toJSON } from './to-json';

@Pipe({
	name: 'toJson',
	pure: true,
})
export class ToJsonPipe implements PipeTransform {
	transform<T>(value: T): string {
		return toJSON(value);
	}
}
