import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { loadDirection } from './scroll-direction.enum';

@Directive({
	selector: '[appInfinityScroll]',
})
export class InfinityScrollDirective {
	@Output() loadDirection = new EventEmitter<loadDirection>();

	private offset = 100;
	private previousScrollTop = -1;

	@HostListener('scroll', ['$event.target'])
	onScroll({ scrollTop, scrollHeight, clientHeight }: HTMLElement) {
		const direction = this.previousScrollTop > scrollTop ? loadDirection.up : loadDirection.down;
		const isCrossTopOffset = scrollTop <= this.offset;
		const isCrossDownOffset = scrollHeight - (clientHeight + scrollTop) <= this.offset;

		this.previousScrollTop = scrollTop;

		const needLoadUp = direction === loadDirection.up && isCrossTopOffset;
		const needLoadDown = direction === loadDirection.down && isCrossDownOffset;

		if (needLoadUp || needLoadDown) {
			this.loadDirection.emit(direction);
			return;
		}
	}
}
