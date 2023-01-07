import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
	selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective {
	@Output() topReached = new EventEmitter<void>();
	@Output() bottomReached = new EventEmitter<void>();
	private offset = 100;
	private previousScrollTop = 0;

	@HostListener('scroll', ['$event.target'])
	private onScroll(target: HTMLElement): void {
		const isTopReached = this.offset >= target.scrollTop;
		const isBottomReached = target.scrollHeight - target.scrollTop - target.offsetHeight <= this.offset;

		const isScrollUp = target.scrollTop < this.previousScrollTop;
		const isScrollDown = target.scrollTop > this.previousScrollTop;

		this.previousScrollTop = target.scrollTop;

		if (isScrollDown && isBottomReached) {
			this.bottomReached.emit();
			return;
		}

		if (isScrollUp && isTopReached) {
			this.topReached.emit();
			return;
		}
	}
}
