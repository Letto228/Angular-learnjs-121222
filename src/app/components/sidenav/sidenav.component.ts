import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	Inject,
	OnInit,
	Optional,
	Self,
	SkipSelf,
	ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BASE_URL } from '../../shared/base-url/base-url.token';
import { CategoriesStoreService } from '../../shared/categories/categories-store.service';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
	readonly categories$ = this.categoriesStoreService.categories$;

	@ViewChild(MatDrawer, { read: MatDrawer, static: true })
	private drawer!: MatDrawer;

	constructor(
		private changeDetectorRef: ChangeDetectorRef,
		private readonly categoriesStoreService: CategoriesStoreService,
	) {}

	ngOnInit() {
		this.categoriesStoreService.loadCategories();
	}

	sidenavToggle() {
		this.drawer.toggle();
		this.changeDetectorRef.markForCheck();
	}
}
