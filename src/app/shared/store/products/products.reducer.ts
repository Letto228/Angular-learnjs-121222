import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { addProducts } from './products.actions';
import { IProductsState, productsAdapter, productsInitialState } from './products.state';

export const productsReducer = createReducer(
	productsInitialState,
	// on(addProducts, (state: IProductsState, {products}) => [
	//     ...state,
	//     ...products,
	// ]),
	on(addProducts, (state: IProductsState, { products }) => productsAdapter.setAll(products, state)),
);
