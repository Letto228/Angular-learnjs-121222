import { Directive, HostListener, EventEmitter, Output } from '@angular/core';
import { ScrollDirection } from './scroll.consts';

@Directive({
	selector: '[appInsertScroll]',
})
export class InsertScrollDirective {
	@Output()
	appInsertScroll = new EventEmitter<ScrollDirection>();

	private lastPoint = 0;
	private readonly offset = 100;

	@HostListener('scroll', ['$event'])
	private onScroll($event: Event): void {
		const { clientHeight, scrollHeight, scrollTop } = $event.target as HTMLElement;
		const lastPoint = this.lastPoint;
		this.lastPoint = scrollTop;

		const needScrollDown = scrollTop > lastPoint && this.shouldScrollDown(scrollTop, scrollHeight, clientHeight);
		if (needScrollDown) {
			return this.appInsertScroll.emit(ScrollDirection.Down);
		}
		const needScrollUp = scrollTop < lastPoint && this.shouldScrollUp(scrollTop);
		if (needScrollUp) {
			return this.appInsertScroll.emit(ScrollDirection.Up);
		}
	}
	private shouldScrollDown(scrollTop: number, scrollHeight: number, clientHeight: number) {
		const border = scrollHeight - clientHeight - scrollTop;
		return border < this.offset;
	}

	private shouldScrollUp(scrollTop: number) {
		return scrollTop < this.offset;
	}
}
