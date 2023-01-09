import { Directive, EventEmitter, HostListener, OnDestroy, Output } from '@angular/core';
import { LoadDirection } from './load-direction';
import { debounceTime, Subject } from 'rxjs';

@Directive({
	selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective implements OnDestroy {
	@Output() loadData = new EventEmitter<LoadDirection>();
	private debouncer = new Subject<LoadDirection>();
	private offset = 100;
	private previousScrollTop = 0;

	constructor() {
		this.debouncer.pipe(debounceTime(1000)).subscribe(value => this.loadData.emit(value));
	}

	ngOnDestroy() {
		this.debouncer.complete();
	}

	@HostListener('scroll', ['$event.target'])
	private onScroll(target: HTMLElement): void {
		const isTopReached = this.offset >= target.scrollTop;
		const isBottomReached = target.scrollHeight - target.scrollTop - target.clientHeight <= this.offset;

		const isScrollUp = target.scrollTop < this.previousScrollTop;
		const isScrollDown = target.scrollTop > this.previousScrollTop;

		this.previousScrollTop = target.scrollTop;

		if (isScrollDown && isBottomReached) {
			this.debouncer.next(LoadDirection.After);
			return;
		}

		if (isScrollUp && isTopReached) {
			this.debouncer.next(LoadDirection.Before);
			return;
		}
	}
}
