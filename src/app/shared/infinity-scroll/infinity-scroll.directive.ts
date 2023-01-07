import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

export enum LoadDirection {
	up = 'up',
	down = 'down',
}

@Directive({
	selector: '[appInfinityScroll]',
})
export class InfinityScrollDirective {
	@Output() topScroll = new EventEmitter<LoadDirection>();
	@Output() bottomScroll = new EventEmitter<LoadDirection>();

	private offset = 100;
	private previousDirection?: LoadDirection;
	private previousScrollHeight?: number;

	@HostListener('scroll', ['$event.target'])
	onScroll({ scrollTop, scrollHeight, clientHeight }: HTMLElement) {
		// console.log(`scrollHeight = ${scrollHeight}`, `clientHeight = ${clientHeight}`);
		//  console.log(`scrollTop = ${scrollTop}`);
		// console.log(`scrollHeight - (clientHeight + scrollTop) = ${scrollHeight - (scrollTop + clientHeight)}`);

		const scrollUp = scrollTop <= this.offset;
		const scrollDown = scrollHeight - (clientHeight + scrollTop) <= this.offset;
		const directionUpdate = scrollHeight !== this.previousScrollHeight;
		const updateOnScrollUp = this.previousDirection === LoadDirection.down;
		const updateOnScrollDown =
			this.previousDirection === LoadDirection.up || !this.previousDirection || directionUpdate;

		if (scrollUp && updateOnScrollUp) {
			this.topScroll.emit(LoadDirection.up);
			this.previousDirection = LoadDirection.up;
			console.log('load top < 100');
			return;
		}

		if (scrollDown && updateOnScrollDown) {
			this.bottomScroll.emit(LoadDirection.down);
			this.previousDirection = LoadDirection.down;
			this.previousScrollHeight = scrollHeight;
			console.log('load bottom < 100');
			return;
		}
	}
}
