import { Directive, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
	selector: '[appInsertScroll]',
})
export class InsertScrollDirective {
	@Output()
	appInsertScroll = new EventEmitter<string>();

	lastPoint = 0;
	readonly offset = 100;

	@HostListener('scroll', ['$event'])
	private onScroll($event: Event): void {
		const { clientHeight, scrollHeight, scrollTop } = $event.target as HTMLElement;
		const lastPoint = this.lastPoint;
		this.lastPoint = scrollTop;

		if (scrollTop > lastPoint) {
			const scrollDown = this.shouldScrollDown(scrollTop, scrollHeight, clientHeight);
			if (scrollDown) {
				return this.appInsertScroll.emit('down');
			}
		}
		if (scrollTop < lastPoint) {
			const scrollUp = this.shouldScrollUp(scrollTop);
			if (scrollUp) {
				return this.appInsertScroll.emit('up');
			}
		}
	}
	private shouldScrollDown(scrollTop: number, scrollHeight: number, clientHeight: number) {
		const border = scrollHeight - clientHeight - scrollTop;
		if (border < this.offset) return true;
		else return false;
	}

	private shouldScrollUp(scrollTop: number) {
		if (scrollTop < this.offset) return true;
		else return false;
	}
}
