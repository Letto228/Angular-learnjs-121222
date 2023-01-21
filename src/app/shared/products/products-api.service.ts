import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BASE_URL } from '../base-url/base-url.token';
import { getParamsFromObject } from '../params/get-params-from-object';
import { IProduct } from './product.interface';
import { IProductsDto } from './products.dto';
import { productsMock } from './products.mock';

@Injectable({
	providedIn: 'root',
})
export class ProductsApiService {
	constructor(private readonly http: HttpClient) {}

	getProducts$(subCategoryId?: string | null): Observable<IProduct[]> {
		return this.http
			.get<IProductsDto>(`/products`, {
				params: getParamsFromObject({ subCat: subCategoryId }),
			})
			.pipe(map(({ data }) => data.items));
	}

	getProduct$(id: string): Observable<IProduct | undefined> {
		return this.http.get<{ data: IProduct }>(`/products/${id}`).pipe(map(({ data }) => data));
	}
}
