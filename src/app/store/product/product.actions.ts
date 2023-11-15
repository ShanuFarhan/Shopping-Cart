import { createAction, props } from '@ngrx/store';

export const addProduct = createAction('[Product] Add Product', props<{ product: any }>());
export const loadProducts = createAction('[Product] Load Products');
export const setProducts = createAction('[Product] Set Products', props<{ products: any[] }>());
export const deleteProduct = createAction('[Product] Delete Product', props<{ productId: string }>());
export const productDeleted = createAction('[Product] Product Deleted', props<{ productId: string }>());
export const editProduct = createAction('[Product] Edit Product', props<{ productId: string }>());
export const productEdited = createAction('[Product] Product Edited', props<{ updatedProduct: any }>());
