import { Directive, Input, ViewContainerRef, TemplateRef, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Subject, map, takeUntil } from 'rxjs';

interface IPagenatorContext<T> {
	$implicit: T[];
	currentPage: number;
	pageIndexes: number[];
	maxPage: number;
	next: () => void;
	back: () => void;
	toPage: (pageIndex: number) => void;
}

@Directive({
  selector: '[appPagenator]'
})
export class PagenatorDirective<T> implements OnChanges, OnInit, OnDestroy {
	@Input() appPagenatorOf: T[] | undefined | null;
	@Input() appPagenatorPageSize = 1;

	private allPages: T[][] = [];

	private readonly currentPage$ = new BehaviorSubject<number>(0);
	private readonly destroy$ = new Subject<void>();

	constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<IPagenatorContext<T>>) {}

	ngOnChanges({ appPagenatorOf, appPagenatorPageSize }: SimpleChanges): void {
		if (appPagenatorOf || appPagenatorPageSize) {
			if (!this.appPagenatorOf?.length) {
				this.viewContainerRef.clear();

				return;
			}

			this.getPagesItems(this.appPagenatorOf, this.appPagenatorPageSize);
			this.currentPage$.next(0);
		}
	}

	ngOnInit() {
		this.listenCurrentIndexChange();
	}

	ngOnDestroy(): void {
		this.destroy$.next();
	}

	private listenCurrentIndexChange() {
		this.currentPage$
			.pipe(
				map(index => this.getCurrentContext(index)),
				takeUntil(this.destroy$),
			)
			.subscribe(context => {
				this.viewContainerRef.clear();
				this.viewContainerRef.createEmbeddedView(this.templateRef, context);
			});
	}

	private getCurrentContext(pageIndex: number): IPagenatorContext<T> {
		return {
			$implicit: this.allPages[pageIndex],
			currentPage: pageIndex,
      pageIndexes: this.getPageIndexes(),
      maxPage: this.allPages.length - 1,
			next: () => {
				this.next();
			},
			back: () => {
				this.back();
			},
			toPage: (index: number) => {
				this.toPage(index);
			},
		};
  }
  
  private getPageIndexes(): number[] {
    let pageIndexes: number[] = [];

    for (let i = 0; i < this.allPages.length; i++) {
      pageIndexes.push(i);
    }

    return pageIndexes;
  }

	private next() {
    const nextIndex = this.currentPage$.value + 1;
    
    //По факту это просто защита от дурака, потому что на стронице дизейблятся кнопки для перелистывания
		const newIndex = nextIndex < this.allPages.length ? nextIndex : (this.allPages.length - 1);

		this.currentPage$.next(newIndex);
	}

	private back() {
    const previousIndex = this.currentPage$.value - 1;
    
    //По факту это просто защита от дурака, потому что на стронице дизейблятся кнопки для перелистывания
		const newIndex = previousIndex >= 0 ? previousIndex : 0;

		this.currentPage$.next(newIndex);
	}

	private toPage(index: number) {
		this.currentPage$.next(index);
	}
  
  private getPagesItems(items: T[], pageSize: number): void {
    let pages_items: T[][] = [];

    for (let i = 0; i < items.length; i += pageSize) {
      pages_items.push(items.slice(i, i + pageSize));
    }
    
    this.allPages = pages_items;
  }

}
