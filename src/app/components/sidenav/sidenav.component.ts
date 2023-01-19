import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	Inject,
	Optional,
	Self,
	SkipSelf,
	ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BASE_URL } from '../../shared/base-url/base-url.token';
import { ProductsStoreService } from '../../shared/products/products-store.service';

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
