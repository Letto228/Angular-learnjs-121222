import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { loadDirection } from './scroll-direction.enum';

@Directive({
	selector: '[appInfinityScroll]',
})
export class InfinityScrollDirective {
	@Output() loadDirection = new EventEmitter<loadDirection>();

	private offset = 100;
	private previousDirection?: loadDirection;
	private previousScrollHeight?: number;

	@HostListener('scroll', ['$event.target'])
	onScroll({ scrollTop, scrollHeight, clientHeight }: HTMLElement) {
		const isBorderFarAway = scrollTop <= this.offset;
		const isUploadItems = scrollHeight - (clientHeight + scrollTop) <= this.offset;
		const directionUpdate = scrollHeight !== this.previousScrollHeight;
		const updateOnScrollDown =
			this.previousDirection === loadDirection.up || !this.previousDirection || directionUpdate;

		if (isBorderFarAway) {
			this.loadDirection.emit(loadDirection.up);
			this.previousDirection = loadDirection.up;
			this.previousScrollHeight = scrollHeight;
			console.log('load top < 100');
			return;
		}

		if (isUploadItems && updateOnScrollDown) {
			this.loadDirection.emit(loadDirection.down);
			this.previousDirection = loadDirection.down;
			this.previousScrollHeight = scrollHeight;
			console.log('load bottom < 100');
			return;
		}
	}
}
