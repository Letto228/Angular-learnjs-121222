import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

export enum ScrollDirection {
	up = 'up',
	down = 'down',
}

@Directive({
	selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective {
	@Input() borderOffset = 0;
	@HostListener('scroll', ['$event.target'])
	private onScroll(element: HTMLElement) {
		const directionUp = element.scrollTop <= this.borderOffset;
		const directionDown = element.scrollHeight - element.scrollTop - element.offsetHeight <= this.borderOffset;
		const hostUpdated = element.scrollHeight !== this.previousScrollHeight;

		const updateOnScrollUp = this.previousDirection === ScrollDirection.down;
		const updateOnScrollDown =
			this.previousDirection === ScrollDirection.up || !this.previousDirection || hostUpdated;

		if (directionUp && updateOnScrollUp) {
			this.offsetIntersected.emit(ScrollDirection.up);
			this.previousDirection = ScrollDirection.up;
		} else if (directionDown && updateOnScrollDown) {
			this.offsetIntersected.emit(ScrollDirection.down);
			this.previousDirection = ScrollDirection.down;
			this.previousScrollHeight = element.scrollHeight;
		}
	}

	@Output() offsetIntersected: EventEmitter<ScrollDirection> = new EventEmitter<ScrollDirection>();

	private previousDirection?: ScrollDirection;
	private previousScrollHeight?: number;
}
