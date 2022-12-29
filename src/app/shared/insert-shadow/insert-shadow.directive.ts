import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appInsertShadow]',
})
export class InsertShadowDirective {
	// @HostListener('click', ['$event.clientY', '$event.clientX']) // (click)="onClick($event.clientY, $event.clientX)"
	// onClick() {
	//   // console.log('click', clientY, clientX);
	//   this.boxShadow = !this.boxShadow ? 'inset 0 0 10px #000' : '';
	// }

	// @HostBinding('style.boxShadow') // [style.boxShadow]="boxShadow"
	// boxShadow = '';

	isBoxShadowActive = false;

	@HostListener('click')
	onClick() {
		// console.log(this.elementRef.nativeElement);
		this.isBoxShadowActive = !this.isBoxShadowActive;
	}

	@HostBinding('style.boxShadow')
	get boxShadow(): string {
		return this.isBoxShadowActive ? 'inset 0 0 10px #000' : '';
	}

	// constructor(
	//   private elementRef: ElementRef
	// ) {}
}
