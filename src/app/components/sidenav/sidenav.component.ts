import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	@ViewChild(MatDrawer, { read: MatDrawer, static: true })
	private drawer!: MatDrawer;

	sidenavToggle() {
		this.drawer.toggle();
		this.changeDetectorRef.markForCheck();
	}
}
