export interface IPaginationContext<T> {
	$implicit: T[];
	currentPage: number;
	allPages: number[];
	prev: () => void;
	next: () => void;
	selectPage: (index: number) => void;
}
