import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productsMock } from '../../shared/products/products.mock';
import { LoadDirection } from '../../shared/scroll-with-loading/load-direction.const';
import { PagenatorDirective } from '../../shared/pagenator/pagenator.directive';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit, DoCheck {
	products: IProduct[] | null = null;

	inputValue = [...productsMock].map(item => item.name);

	constructor(private applicationRef: ApplicationRef, private changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit() {
		setTimeout(() => {
			this.products = productsMock;
			this.changeDetectorRef.detectChanges();
		}, 3000);

		setTimeout(() => {
			this.changeDetectorRef.markForCheck();
		}, 6000);
	}

	ngDoCheck(): void {
		console.log('ngDoCheck');
	}

	trackById(index: number, item: IProduct) {
		return item._id;
	}
}
