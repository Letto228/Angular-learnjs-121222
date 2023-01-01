import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupContanerComponent } from './popup-contaner/popup-contaner.component';

@NgModule({
	declarations: [PopupContanerComponent],
	imports: [CommonModule],
	exports: [PopupContanerComponent],
})
export class PopupModule {}
