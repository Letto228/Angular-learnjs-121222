import { forwardRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppModule } from '../../app.module';
import { IProduct } from './product.interface';
import { ProductsApiService } from './products-api.service';

@Injectable({
	providedIn: 'root',
})
export class ProductsStoreService {
	private readonly productsStore$ = new BehaviorSubject<IProduct[] | null>(null);
	private readonly productStore$ = new BehaviorSubject<IProduct | null>(null);

	constructor(private productsApiService: ProductsApiService) {}

	get products$(): Observable<IProduct[] | null> {
		return this.productsStore$.asObservable();
	}

	get product$(): Observable<IProduct | null> {
		return this.productStore$.asObservable();
	}

	loadProducts(subCategoryId?: string | null) {
		this.productsApiService.getProducts$(subCategoryId).subscribe(products => {
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
