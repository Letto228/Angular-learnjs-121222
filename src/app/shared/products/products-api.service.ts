import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BASE_URL } from '../base-url/base-url.token';
import { IProduct } from './product.interface';
import { IProductsDto } from './products.dto';
import { productsMock } from './products.mock';

@Injectable({
	providedIn: 'root',
})
export class ProductsApiService {
	constructor(
		// @Inject(BASE_URL) private baseUrl: string,
		private readonly http: HttpClient,
	) {}

	getProducts$(): Observable<IProduct[]> {
		// console.log(this.baseUrl);
		// return of({ data: { items: productsMock } }).pipe(map(({ data }) => data.items));
		return this.http.get<IProductsDto>(`/products/suggestion`).pipe(map(({ data }) => data.items));
	}
}
