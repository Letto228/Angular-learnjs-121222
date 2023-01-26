import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isStringValidator(control: AbstractControl): ValidationErrors | null {
	return Number(control.value) ? { isStringValidator: 'is not string' } : null;
}

export function isStringValidatorWithParam(param: any): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null =>
		Number(control.value) ? { isStringValidator: 'is not string' } : null;
}
