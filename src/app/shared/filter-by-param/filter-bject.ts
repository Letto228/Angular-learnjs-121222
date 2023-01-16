import { WithWildcards } from './wildcard.type';

export function filterObject<T>(value: WithWildcards<T>, filterValue: unknown, filterParam: string): boolean {
	return Object.hasOwn(value, filterParam) && value[filterParam] === filterValue;
}
