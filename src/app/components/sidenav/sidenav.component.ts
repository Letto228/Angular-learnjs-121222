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
	providers: [
		{
			provide: 'name',
			useValue: 'SidenavComponentElementInjector',
		},
	],
})
export class SidenavComponent {
	constructor(
		private changeDetectorRef: ChangeDetectorRef,
	) // @Inject(ProductsStoreService) private productsStoreService: ProductsStoreService,
	// @Inject('name') private name: string,
	// @SkipSelf() @Inject('name') private nameParent: string,
	// @Optional() @Self() @Inject('name') private myName: string,
	// @Optional() @Inject('name-empty') private nameEmpty: string | null,

	// private elementRef: ElementRef,
	// @Inject(BASE_URL) private baseUrl: string
	{
		// console.log(this.name);
		// console.log(this.nameParent);
		// console.log(this.myName);
		// console.log(this.nameEmpty);
	}

	@ViewChild(MatDrawer, { read: MatDrawer, static: true })
	private drawer!: MatDrawer;

	sidenavToggle() {
		this.drawer.toggle();
		this.changeDetectorRef.markForCheck();
	}
}
