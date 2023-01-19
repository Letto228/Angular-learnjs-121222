import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, of, switchMap, tap } from 'rxjs';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { productsMock } from '../../shared/products/products.mock';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
	// readonly product$ = of(productsMock[0]);
	readonly product$ = this.activatedRoute.paramMap.pipe(
		map(paramMap => paramMap.get('id')),
		tap(id => {
			console.log('id from stream', id);
		}),
		filter(Boolean),
		tap(id => {
			this.productsStoreService.loadProduct(id);
		}),
		switchMap(() => this.productsStoreService.product$),
	);

	constructor(
		// private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute,
		private readonly productsStoreService: ProductsStoreService,
	) {}

	ngOnInit() {
		console.log('id from ngOnInit', this.activatedRoute.snapshot.params['id']);
		// setTimeout(() => {
		// 	this.router.navigate(['/product', 'mikroskop-levenhuk-labzz-m3-sinij', 'description']);
		// }, 3000)
	}

	// navigateToTab(tabSegment: string) {
	// 	console.log(this.activatedRoute.snapshot);

	// this.router.navigate([tabSegment], {relativeTo: this.activatedRoute, queryParams: {}});

	// const urlTree = this.router.createUrlTree([tabSegment], {relativeTo: this.activatedRoute});

	// Абсоютная навигация
	// const urlTree = this.router.createUrlTree([`/${tabSegment}`], {relativeTo: this.activatedRoute, queryParams: {}});

	// console.log(urlTree, urlTree.toString());

	// this.router.navigateByUrl(urlTree.toString());
	// }
}
