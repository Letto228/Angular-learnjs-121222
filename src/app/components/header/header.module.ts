import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
	declarations: [HeaderComponent],
	imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatBadgeModule],
	exports: [HeaderComponent],
})
export class HeaderModule {}
