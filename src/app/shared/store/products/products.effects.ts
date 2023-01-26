import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { map, of, switchMap, tap } from 'rxjs';
import { ProductsApiService } from '../../products/products-api.service';
import { IState } from '../reducer';
import { addProducts, loadProducts } from './products.actions';
import { productsAllSelector } from './products.selectors';

@Injectable()
export class ProductsEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly productsApiService: ProductsApiService,
		private readonly store$: Store<IState>,
	) {}

	loadProducts$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadProducts), // filter(action => action.type === loadProducts.type)
			switchMap(({ subCategoryId }) =>
				this.productsApiService.getProducts$(subCategoryId).pipe(map(products => addProducts(products))),
			),
		),
	);

	addProducts$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(addProducts), // filter(action => action.type === loadProducts.type)
				switchMap(() => this.store$.pipe(select(productsAllSelector))),
				tap(console.log),
			),
		{ dispatch: false },
	);
}
