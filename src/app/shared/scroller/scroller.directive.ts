import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

const OFFSET = 10;

@Directive({
	selector: '[appScroller]',
})
export class ScrollerDirective {
	@Output() loadPage = new EventEmitter<string>();

	private prev = -1;

	@HostListener('scroll', ['$event.target'])
	onScroll({ scrollTop, clientHeight, scrollHeight }: HTMLElement) {
		const prev = this.prev;
		const bottom = scrollHeight - clientHeight;
		this.prev = scrollTop;

		const shouldLoadBottom = scrollTop < OFFSET && scrollTop < prev;
		const shouldLoadTop = bottom - scrollTop < OFFSET && scrollTop > prev;

		if (shouldLoadBottom) {
			this.loadPage.emit('after');
			return;
		}

		if (shouldLoadTop) {
			this.loadPage.emit('before');
			return;
		}
	}
}
