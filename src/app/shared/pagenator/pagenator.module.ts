import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenatorDirective } from './pagenator.directive';



@NgModule({
  declarations: [
    PagenatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagenatorDirective
  ]
})
export class PagenatorModule { }
