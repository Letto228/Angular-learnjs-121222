import { createAction } from '@ngrx/store';
import { IProduct } from '../../products/product.interface';

export enum ProductsActionTypes {
	AddProducts = '[Products] Add products',
	LoadProducts = '[Products] Load products',
}

export const addProducts = createAction(ProductsActionTypes.AddProducts, (products: IProduct[]) => ({ products }));

// addProducts([...]) => {type: ProductsActionTypes.AddProducts, products: [...],} as Action

// export class AddProducts {
//      type = ProductsActionTypes.AddProducts,
//      constructor(products) {
//          this.products = products;
//      }
// }

// new AddProducts([...]) => {type: ProductsActionTypes.AddProducts, products: [...],} as Action

export const loadProducts = createAction(ProductsActionTypes.LoadProducts, (subCategoryId: string | null) => ({
	subCategoryId,
}));
