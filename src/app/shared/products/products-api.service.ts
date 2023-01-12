import { Inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BASE_URL } from '../base-url/base-url.token';
import { IProduct } from './product.interface';
import { productsMock } from './products.mock';

@Injectable()
export class ProductsApiService {
	constructor(@Inject(BASE_URL) private baseUrl: string) {}

	getProducts$(): Observable<IProduct[]> {
		console.log(this.baseUrl);
		return of({ data: { items: productsMock } }).pipe(map(({ data }) => data.items));
	}
}
