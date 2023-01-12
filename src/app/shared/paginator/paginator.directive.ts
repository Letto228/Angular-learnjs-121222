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
import { BehaviorSubject, map, Subject, takeUntil } from 'rxjs';

interface IPaginatorContext<T> {
	$implicit: T[];
	next: () => void;
	back: () => void;
	toPage: (page: number) => void;
	appPaginator: T[] | undefined | null;
	size: number;
	currentPage: number;
}

@Directive({
	selector: '[appPaginator]',
})
export class PaginatorDirective<T> implements OnChanges, OnInit, OnDestroy {
	@Input() appPaginator: T[] | undefined | null;
	@Input() appPaginatorPerPage = 1;

	private readonly currentPage$ = new BehaviorSubject<number>(0);
	private pages: T[][] = [];
	private destroy$: Subject<void> = new Subject<void>();

	constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<IPaginatorContext<T>>) {}

	ngOnChanges({ appPaginator, appPaginatorPerPage }: SimpleChanges) {
		if (appPaginator || appPaginatorPerPage) {
			this.updateView();
			this.sliceChunks();
		}
	}

	ngOnInit() {
		this.listenCurrentPageChange();
	}

	public ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	private updateView() {
		if (!this.appPaginator?.length) {
			this.viewContainerRef.clear();

			return;
		}

		this.currentPage$.next(0);
	}

	private listenCurrentPageChange() {
		this.currentPage$
			.pipe(
				map(currentPage => this.getCurrentContext(currentPage)),
				takeUntil(this.destroy$),
			)
			.subscribe(context => {
				this.viewContainerRef.clear();
				this.viewContainerRef.createEmbeddedView(this.templateRef, context);
			});
	}

	private getCurrentContext(currentPage: number): IPaginatorContext<T> {
		return {
			$implicit: this.pages[currentPage],
			appPaginator: this.appPaginator,
			size: this.pages.length,
			currentPage: this.currentPage$.value,
			next: () => {
				this.next();
			},
			back: () => {
				this.back();
			},
			toPage: (page: number) => {
				this.toPage(page);
			},
		};
	}

	private next() {
		const nextPage = this.currentPage$.value + 1;
		const newPage = nextPage < this.pages.length ? nextPage : 0;

		this.currentPage$.next(newPage);
	}

	private back() {
		const previousPage = this.currentPage$.value - 1;
		const newPage = previousPage >= 0 ? previousPage : this.pages.length - 1;

		this.currentPage$.next(newPage);
	}

	private toPage(page: number) {
		const newPage = page < 0 || page > this.pages.length ? 0 : page;

		this.currentPage$.next(newPage);
	}

	private sliceChunks() {
		const chunks = [];
		const entities = this.appPaginator ?? [];

		for (let i = 0; i < entities.length; i += this.appPaginatorPerPage) {
			const chunk = entities.slice(i, i + this.appPaginatorPerPage);
			chunks.push(chunk);
		}

		this.pages = chunks;
	}
}
