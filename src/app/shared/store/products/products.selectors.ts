import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductsState, productsAdapter, PRODUCTS_FEATURE } from './products.state';

export const productsFeatureSelector = createFeatureSelector<IProductsState>(PRODUCTS_FEATURE);
// (state: IState) => state[PRODUCTS_FEATURE];

// export const productsEntetiesSelector = createSelector(
//     productsFeatureSelector,
//     (productsFeature: IProductsState) => productsFeature.entities,
// )
// (state: IState) => fn(productsFeatureSelector(state))

// export const {selectIds, selectEntities, selectAll} = productsAdapter.getSelectors();

// export const productsEntetiesSelector = createSelector(
//     productsFeatureSelector,
//     selectEntities,
// )
// (state: IState) => selectEntities(productsFeatureSelector(state))

// export const productsIdsSelector = createSelector(
//     productsFeatureSelector,
//     selectIds,
// )
// (state: IState) => selectIds(productsFeatureSelector(state))

// export const productsAllSelector = createSelector(
//     productsIdsSelector,
//     productsEntetiesSelector,
//     (ids: IProductsState['ids'], entities: IProductsState['entities']) => ids.map(id => entities[id]),
// )
// (state: IState) => fn(productsIdsSelector(state), productsEntetiesSelector(state))

// export const productsAllSelector = createSelector(
//     productsFeatureSelector,
//     selectAll
// )

export const {
	selectIds: productsIdsSelector,
	selectEntities: productsEntetiesSelector,
	selectAll: productsAllSelector,
} = productsAdapter.getSelectors(productsFeatureSelector);
