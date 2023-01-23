export function filterObject<T>(value: T, filterValue: T[keyof T], filterParam: keyof T): boolean {
	return value[filterParam] === filterValue;
}
