import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { map, Observable, of, timer } from 'rxjs';
import { IProduct } from '../products/product.interface';
import { productsMock } from '../products/products.mock';

@Injectable({
	providedIn: 'root',
})
export class ProductsResolver implements Resolve<IProduct[]> {
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct[]> {
		return timer(4000000).pipe(map(() => productsMock));
	}
}
