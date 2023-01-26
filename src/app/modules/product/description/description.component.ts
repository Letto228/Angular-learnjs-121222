import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductsStoreService } from '../../../shared/products/products-store.service';

@Component({
	selector: 'app-description',
	templateUrl: './description.component.html',
	styleUrls: ['./description.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent {
	readonly products$ = this.productsStoreService.product$;

	constructor(private readonly productsStoreService: ProductsStoreService) {}
}
