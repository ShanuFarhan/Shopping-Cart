// product.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectProductState = createFeatureSelector<any>('products');

export const selectCart = createSelector(selectProductState, state => state.cart);
export const selectProducts = createSelector(selectProductState, state => state.products);
