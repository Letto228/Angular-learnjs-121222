import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

export enum ScrollDirection {
  Up = 'up',
  Down = 'down',
}

@Directive({
  selector: '[appScroller]'
})
export class ScrollerDirective {
  private offset = 100;
  private topOffset = 0;
  
  @Output() loadData = new EventEmitter<ScrollDirection>();

  @HostListener('scroll', ['$event.target'])
  private onScroll(target: HTMLElement): void {
    const scrollDirection: ScrollDirection = target.scrollTop < this.topOffset ? ScrollDirection.Up : ScrollDirection.Down;
    
    const isFirstTop = target.scrollTop <= this.offset 
      && this.topOffset > this.offset;

    const isFirstBottom = target.scrollHeight - target.clientHeight - target.scrollTop <= this.offset 
      && target.scrollHeight - target.clientHeight - this.topOffset > this.offset;

		this.topOffset = target.scrollTop;

    if (scrollDirection === ScrollDirection.Up && isFirstTop) return this.loadData.emit(ScrollDirection.Up);
    if (scrollDirection === ScrollDirection.Down && isFirstBottom) return this.loadData.emit(ScrollDirection.Down);
  }

}
