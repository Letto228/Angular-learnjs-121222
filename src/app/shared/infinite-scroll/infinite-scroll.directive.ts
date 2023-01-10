import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ScrollDirectionEnum } from './scroll-direction.enum';

@Directive({
	selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective {
	@Input() borderOffset = 0;
	@HostListener('scroll', ['$event.target'])
	private onScroll(element: HTMLElement) {
		const previousTopLower = element.scrollTop < this.previousScrollTop;
		const previousTopGreater = element.scrollTop > this.previousScrollTop;
		const intersectedTopBorder = element.scrollTop <= this.borderOffset && previousTopLower;
		const intersectedBottomBorder =
			element.scrollHeight - element.scrollTop - element.clientHeight <= this.borderOffset && previousTopGreater;

		this.previousScrollTop = element.scrollTop;

		if (intersectedTopBorder && previousTopLower) {
			this.offsetIntersected.emit(ScrollDirectionEnum.up);
		}

		if (intersectedBottomBorder && previousTopGreater) {
			this.offsetIntersected.emit(ScrollDirectionEnum.down);
		}
	}

	@Output() offsetIntersected: EventEmitter<ScrollDirectionEnum> = new EventEmitter<ScrollDirectionEnum>();

	private previousScrollTop = -1;
}
