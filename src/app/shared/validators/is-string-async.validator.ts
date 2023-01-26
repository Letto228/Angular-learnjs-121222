import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { map, Observable, timer } from 'rxjs';
import { isStringValidator } from './is-string.validator';

export function isStringAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
	return timer(3000).pipe(map(() => (Number(control.value) ? { isStringAsyncValidator: 'is not string' } : null)));
}

export function isStringAsyncValidatorWithParam(param: any): AsyncValidatorFn {
	return (control: AbstractControl): Observable<ValidationErrors | null> =>
		timer(3000).pipe(map(() => isStringValidator(control)));
}
