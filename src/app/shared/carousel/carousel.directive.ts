import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

interface ICarouselContext<T> {
	$implicit: T;
	next: () => void;
	back: () => void;
}

@Directive({
	selector: '[appCarousel]',
})
export class CarouselDirective<T> implements OnChanges, OnInit {
	@Input() appCarousel: T[] | undefined;

	private readonly currentIndex$ = new BehaviorSubject<number>(0);

	constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<ICarouselContext<T>>) {}

	ngOnChanges({ appCarousel }: SimpleChanges) {
		if (appCarousel) {
			this.updateView();
		}
	}

	ngOnInit() {
		this.listenCurrentIndexChange();
	}

	private updateView() {
		if (!this.appCarousel?.length) {
			this.viewContainerRef.clear();

			return;
		}

		this.currentIndex$.next(0);
	}

	private listenCurrentIndexChange() {
		this.currentIndex$.pipe(map(currentIndex => this.getCurrentContext(currentIndex))).subscribe(context => {
			this.viewContainerRef.clear();
			this.viewContainerRef.createEmbeddedView(this.templateRef, context);
		});
	}

	private getCurrentContext(currentIndex: number): ICarouselContext<T> {
		return {
			$implicit: (this.appCarousel as T[])[currentIndex],
			next: () => {
				this.next();
			},
			back: () => {
				this.back();
			},
		};
	}

	private next() {
		const nextIndex = this.currentIndex$.value + 1;
		const newIndex = nextIndex < (this.appCarousel as T[]).length ? nextIndex : 0;

		this.currentIndex$.next(newIndex);
	}

	private back() {
		const previousIndex = this.currentIndex$.value - 1;
		const newIndex = previousIndex >= 0 ? previousIndex : (this.appCarousel as T[]).length - 1;

		this.currentIndex$.next(newIndex);
	}
}
