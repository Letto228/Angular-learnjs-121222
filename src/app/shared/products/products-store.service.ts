import { forwardRef, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppModule } from '../../app.module';
import { addProducts } from '../store/products/products.actions';
import { IState } from '../store/reducer';
import { IProduct } from './product.interface';
import { ProductsApiService } from './products-api.service';

@Injectable({
	providedIn: 'root',
})
export class ProductsStoreService {
	private readonly productsStore$ = new BehaviorSubject<IProduct[] | null>(null);
	private readonly productStore$ = new BehaviorSubject<IProduct | null>(null);

	constructor(private productsApiService: ProductsApiService) // private readonly store$: Store<IState>,
	{}

	get products$(): Observable<IProduct[] | null> {
		return this.productsStore$.asObservable();
	}

	get product$(): Observable<IProduct | null> {
		return this.productStore$.asObservable();
	}

	loadProducts(subCategoryId?: string | null) {
		this.productsApiService.getProducts$(subCategoryId).subscribe(products => {
			// this.store$.dispatch(addProducts(products));
			this.productsStore$.next(products);
		});
	}

	loadProduct(id: string) {
		this.productStore$.next(null);

		this.productsApiService.getProduct$(id).subscribe(product => {
			this.productStore$.next(product || null);
		});
	}
}
