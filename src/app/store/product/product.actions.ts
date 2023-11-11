import { createAction, props } from '@ngrx/store';

export const addProduct = createAction('[Product] Add Product', props<{ product: any }>());
export const loadProducts = createAction('[Product] Load Products');
export const setProducts = createAction('[Product] Set Products', props<{ products: any[] }>());
// export const deleteProduct = createAction('[Product] Delete Product', props<{ id: any }>());
// export const updateProduct = createAction('[Product] Update Product', props<{ id: any; updatedProduct: any }>());
// export const addToCart = createAction('[Product] Add to Cart', props<{ product: any, quantity: number }>());
// export const increaseQuantity = createAction('[Cart] Increase Quantity', props<{ productId: any }>());
// export const decreaseQuantity = createAction('[Cart] Decrease Quantity', props<{ productId: any }>());

