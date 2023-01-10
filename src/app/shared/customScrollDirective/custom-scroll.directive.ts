import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
	selector: '[appCustomInfinityScroll]',
})
export class CustomInfinityScrollDirective {
	private offset = 100;
	// сколько отскролено сверху
	private topScrolled = 0;

	@Output() loadDataDirection = new EventEmitter<string>();

	@HostListener('scroll', ['$event.target'])
	private onScroll(target: HTMLElement): void {
		const isTopReached = target.scrollTop < this.offset;
		const isBottomReached = target.scrollHeight - target.clientHeight - target.scrollTop < this.offset;

		const scrollDirectionDown = target.scrollTop < this.topScrolled;

		this.topScrolled = target.scrollTop;

		if (scrollDirectionDown && isTopReached) return this.loadDataDirection.emit('top');
		if (!scrollDirectionDown && isBottomReached) return this.loadDataDirection.emit('bottom');
	}
}
