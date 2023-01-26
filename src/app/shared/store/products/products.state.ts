import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IProduct } from '../../products/product.interface';

export const PRODUCTS_FEATURE = 'products';

// export interface IProductsState extends Array<IProduct> {}
// export interface IProductsState {
//     entities: {[id: string]: IProduct};
//     ids: string[], // ids.map(id => entities[id])
// }
export interface IProductsState extends EntityState<IProduct> {
	currentProduct: IProduct | null;
}

export const productsAdapter = createEntityAdapter<IProduct>({
	selectId: ({ _id }: IProduct) => _id,
});

// export const productsInitialState: IProductsState = {
//     entities: {},
//     ids: [],
// }
export const productsInitialState: IProductsState = productsAdapter.getInitialState({
	currentProduct: null,
});
