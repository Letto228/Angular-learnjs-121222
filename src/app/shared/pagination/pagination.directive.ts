import {
	Directive,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges,
	TemplateRef,
	ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { IPaginationContext } from './ipagination-context';
import { splitByPages } from './split-by-pages';

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnDestroy, OnChanges, OnInit {
	@Input() appPaginationPerPage = 3;
	@Input() appPaginationOf: T[] | undefined | null;

	private readonly currentPageIndex$ = new BehaviorSubject<number>(1);
	private readonly destroy$ = new Subject<void>();
	private pages: Array<T[]> = [];
	constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<IPaginationContext<T>>) {}

	public ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	public ngOnChanges({ appPaginationPerPage, appPaginationOf }: SimpleChanges): void {
		if (appPaginationOf || appPaginationPerPage) {
			if (!this.appPaginationOf?.length) {
				this.viewContainerRef.clear();
				return;
			}

			this.pages = splitByPages(this.appPaginationOf, this.appPaginationPerPage);
			this.currentPageIndex$.next(0);
		}
	}

	public ngOnInit() {
		this.pageChangeSubscription();
	}

	public getCurrentContext(index: number): IPaginationContext<T> {
		return {
			$implicit: this.pages[index],
			currentPage: index,
			allPages: this.pages.map((_, index) => index),
			prev: () => {
				this.prev();
			},
			next: () => {
				this.next();
			},
			selectPage: index => {
				this.selectPage(index);
			},
		};
	}

	private prev(): void {
		if (this.pages.length === 0) {
			this.currentPageIndex$.next(0);
			return;
		}

		const prevPage = this.currentPageIndex$.value - 1;

		if (prevPage < 0) {
			return;
		}

		this.currentPageIndex$.next(prevPage);
	}

	private next(): void {
		const nextPage = this.currentPageIndex$.value + 1;

		if (nextPage > this.pages.length - 1) {
			return;
		}

		this.currentPageIndex$.next(nextPage);
	}

	private selectPage(index: number): void {
		this.currentPageIndex$.next(index);
	}

	private pageChangeSubscription() {
		return this.currentPageIndex$.pipe(takeUntil(this.destroy$)).subscribe((pageIndex: number) => {
			this.viewContainerRef.clear();
			this.viewContainerRef.createEmbeddedView(this.templateRef, this.getCurrentContext(pageIndex));
		});
	}
}
