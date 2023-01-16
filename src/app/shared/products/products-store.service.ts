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

	constructor(private productsApiService: ProductsApiService) {}

	get products$(): Observable<IProduct[] | null> {
		return this.productsStore$.asObservable();
	}

	loadProducts() {
		this.productsApiService.getProducts$().subscribe(products => {
			this.productsStore$.next(products);
		});
	}
}
