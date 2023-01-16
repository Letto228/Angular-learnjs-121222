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
import { BehaviorSubject, map, Subject, Subscription, takeUntil } from 'rxjs';

interface ICarouselContext<T> {
	$implicit: T;
	next: () => void;
	back: () => void;
	appCarousel: T[] | undefined;
	appCarouselVisibility: boolean | undefined;
}

@Directive({
	selector: '[appCarousel]',
})
export class CarouselDirective<T> implements OnChanges, OnInit, OnDestroy {
	@Input() appCarousel: T[] | undefined;
	@Input() appCarouselVisibility: boolean | undefined;

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

	ngOnDestroy() {
		// this.currentIndexSubscription?.unsubscribe();
		// this.onDestroySubscription.unsubscribe();
		this.destroy$.next();
	}

	private updateView() {
		if (!this.appCarousel?.length) {
			this.viewContainerRef.clear();

			return;
		}

		this.currentIndex$.next(0);
	}

	// private currentIndexSubscription: Subscription | undefined;
	// private onDestroySubscription = new Subscription();
	private destroy$ = new Subject<void>();

	private listenCurrentIndexChange() {
		// this.currentIndexSubscription = this.currentIndex$
		// this.onDestroySubscription.add(
		this.currentIndex$
			.pipe(
				map(currentIndex => this.getCurrentContext(currentIndex)),
				takeUntil(this.destroy$),
			)
			.subscribe(context => {
				this.viewContainerRef.clear();
				this.viewContainerRef.createEmbeddedView(this.templateRef, context);
			});
		// )
	}

	private getCurrentContext(currentIndex: number): ICarouselContext<T> {
		return {
			$implicit: (this.appCarousel as T[])[currentIndex],
			appCarousel: this.appCarousel,
			appCarouselVisibility: this.appCarouselVisibility,
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

	static ngTemplateContextGuard<T>(
		_directive: CarouselDirective<T>,
		context: unknown,
	): context is ICarouselContext<T> {
		return true;
	}
}
