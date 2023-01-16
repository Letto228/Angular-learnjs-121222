import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, of, switchMap, tap } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { productsMock } from '../../shared/products/products.mock';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
	readonly product$ = of(productsMock[0]);
}
