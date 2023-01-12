import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollerDirective } from './scroller.directive';



@NgModule({
  declarations: [
    ScrollerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollerDirective
  ]
})
export class ScrollerModule { }
