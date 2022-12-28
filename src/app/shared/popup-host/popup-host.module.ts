import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupHostComponent } from './popup-host.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [PopupHostComponent],
	exports: [PopupHostComponent],
	imports: [CommonModule, MatIconModule, MatButtonModule],
})
export class PopupHostModule {}
