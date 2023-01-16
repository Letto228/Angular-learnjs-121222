import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
	declarations: [SidenavComponent],
	imports: [CommonModule, MatSidenavModule, MatButtonModule, MatListModule],
	exports: [SidenavComponent],
	providers: [
		{
			provide: 'name',
			useValue: 'SidenavModuleInjector',
		},
	],
})
export class SidenavModule {}
