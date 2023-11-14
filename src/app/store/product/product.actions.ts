import { createAction, props } from '@ngrx/store';

export const addProduct = createAction('[Product] Add Product', props<{ product: any }>());
export const loadProducts = createAction('[Product] Load Products');
export const setProducts = createAction('[Product] Set Products', props<{ products: any[] }>());
