import {
	Directive,
	OnChanges,
	OnInit,
	Input,
	ViewContainerRef,
	TemplateRef,
	SimpleChanges,
	OnDestroy,
} from '@angular/core';
import { BehaviorSubject, map, Subject, takeUntil } from 'rxjs';
import { getGroupedItems } from './get-grouped-items';

interface IPaginationContext<T> {
	$implicit: T[];
	appPaginationOf: T[];
	index: number;
	addIndexes: number[];
	next: () => void;
	back: () => void;
	selectIndex: (index: number) => void;
}

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnChanges, OnInit, OnDestroy {
	@Input() appPaginationOf: T[] | undefined | null;
	@Input() appPaginationElementsSize = 1;

	private groupedItems: Array<T[]> = [];

	private readonly currentIndex$ = new BehaviorSubject<number>(0);
	private readonly destroy$ = new Subject<void>();

	constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<IPaginationContext<T>>) {}

	ngOnChanges({ appPaginationOf, appPaginationElementsSize }: SimpleChanges): void {
		if (appPaginationOf || appPaginationElementsSize) {
			if (!this.appPaginationOf?.length) {
				this.viewContainerRef.clear();

				return;
			}

			this.groupedItems = getGroupedItems(this.appPaginationOf, this.appPaginationElementsSize);
			this.currentIndex$.next(0);
		}
	}

	ngOnInit() {
		this.listenCurrentIndexChange();
	}

	ngOnDestroy() {
		this.destroy$.next();
	}

	private updateView() {
		if (!this.appPaginationOf?.length) {
			this.viewContainerRef.clear();
			return;
		}

		return this.currentIndex$.next(0);
	}

	private listenCurrentIndexChange() {
		this.currentIndex$
			.pipe(
				map(index => this.getCurrentContext(index, this.groupedItems)),
				takeUntil(this.destroy$),
			)
			.subscribe(context => {
				this.viewContainerRef.clear();
				this.viewContainerRef.createEmbeddedView(this.templateRef, context);
			});
	}

	private getCurrentContext(activeIndex: number, items: Array<T[]>): IPaginationContext<T> {
		return {
			$implicit: items[activeIndex],
			index: activeIndex,
			addIndexes: items.map((_, index) => index),
			appPaginationOf: this.appPaginationOf as T[],
			next: () => {
				this.next();
			},
			back: () => {
				this.back();
			},
			selectIndex: (index: number) => {
				this.selectIndex(index);
			},
		};
	}

	private next() {
		const nextIndex = this.currentIndex$.value + 1;
		const newIndex = nextIndex < (this.appPaginationOf as T[]).length ? nextIndex : 0;

		this.currentIndex$.next(newIndex);
	}

	private back() {
		const previousIndex = this.currentIndex$.value - 1;
		const newIndex = previousIndex >= 0 ? previousIndex : (this.appPaginationOf as T[]).length - 1;

		this.currentIndex$.next(newIndex);
	}

	private selectIndex(index: number) {
		this.currentIndex$.next(index);
	}
}
