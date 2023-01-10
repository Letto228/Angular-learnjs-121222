import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { LoadDirection } from './scroll-direction.enum';

@Directive({
	selector: '[appInfinityScroll]',
})
export class InfinityScrollDirective {
	@Output() LoadDirection = new EventEmitter<LoadDirection>();

	private offset = 100;
	private previousDirection?: LoadDirection;
	private previousScrollHeight?: number;

	@HostListener('scroll', ['$event.target'])
	onScroll({ scrollTop, scrollHeight, clientHeight }: HTMLElement) {
		const isBorderFarAway = scrollTop <= this.offset;
		const isUploadItems = scrollHeight - (clientHeight + scrollTop) <= this.offset;
		const directionUpdate = scrollHeight !== this.previousScrollHeight;
		const updateOnScrollUp = this.previousDirection === LoadDirection.down;
		const updateOnScrollDown =
			this.previousDirection === LoadDirection.up || !this.previousDirection || directionUpdate;

		if (isBorderFarAway && updateOnScrollUp && isBorderFarAway) {
			this.LoadDirection.emit(LoadDirection.up);
			this.previousDirection = LoadDirection.up;
			this.previousScrollHeight = scrollHeight;
			console.log('load top < 100');
			return;
		}

		if (isUploadItems && updateOnScrollDown) {
			this.LoadDirection.emit(LoadDirection.down);
			this.previousDirection = LoadDirection.down;
			this.previousScrollHeight = scrollHeight;
			console.log('load bottom < 100');
			return;
		}
	}
}
