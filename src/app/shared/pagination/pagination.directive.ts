import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

interface IPaginationContext<T> {
	$implicit: T[];
	appPaginationOf: T[];
	pages: number[];
	page: number;
	next: () => void;
	back: () => void;
	selectPage: (page: number) => void;
}

@Directive({
	selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnChanges, OnInit {
	@Input() appPaginationSize = 1;
	@Input() appPaginationOf: T[] | undefined;

	private readonly currentPage$ = new BehaviorSubject<number>(1);
	private currentPageItems: T[] = [];
	private pages = 0;

	constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<IPaginationContext<T>>) {}

	ngOnChanges({ appPaginationOf }: SimpleChanges) {
		if (appPaginationOf) {
			this.updateView();
		}
	}
	private updateView() {
		if (!this.appPaginationOf?.length) {
			this.viewContainerRef.clear();

			return;
		}

		if (this.appPaginationSize) {
			this.pages = Math.ceil((this.appPaginationOf as T[]).length / this.appPaginationSize);
			this.currentPageItems = this.getCurrentPageItems(
				this.appPaginationOf,
				this.appPaginationSize,
				this.currentPage$.value,
			);
		}

		this.currentPage$.next(0);
	}

	ngOnInit() {
		this.listenCurrentPageChange();
	}

	private listenCurrentPageChange() {
		this.currentPage$.pipe(map(currentPage => this.getCurrentContext(currentPage))).subscribe(context => {
			this.viewContainerRef.clear();
			this.viewContainerRef.createEmbeddedView(this.templateRef, context);
		});
	}

	private getCurrentContext(currentPage: number): IPaginationContext<T> {
		return {
			$implicit: this.getCurrentPageItems(this.appPaginationOf as T[], this.appPaginationSize, currentPage),
			page: currentPage,
			appPaginationOf: this.appPaginationOf as T[],
			pages: Array.from(Array(this.pages).keys()),
			next: () => {
				this.next();
			},
			back: () => {
				this.back();
			},
			selectPage: (page: number) => {
				this.selectPage(page);
			},
		};
	}
	private getCurrentPageItems<T>(items: T[], pageSize: number, pageNumber: number) {
		const currentPageItems = items?.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
		return currentPageItems;
	}

	private next() {
		const nextPage = this.currentPage$.value + 1;
		if (nextPage >= this.pages) {
			return;
		}
		this.currentPage$.next(nextPage);
	}

	private back() {
		const previousPage = this.currentPage$.value - 1;

		if (previousPage < 0) {
			return;
		}
		this.currentPage$.next(previousPage);
	}

	private selectPage(page: number) {
		this.currentPage$.next(page);
	}
}
