import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';


export const initialState: any = [];

export const productReducer = createReducer(
  initialState,
  on(ProductActions.setProducts, (state, { products }) => [...products]),
  on(ProductActions.addProduct, (state, { product }) => [...state, product]),
  // on(ProductActions.addToCart, (state, { product, quantity }) => {
  //   const existingItem = state.cart.find((item:any) => item.product.id === product.id);

  //   if (existingItem) {
  //     const updatedCart = state.cart.map((item:any) =>
  //       item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
  //     );
  //     return { ...state, cart: updatedCart };
  //   } else {
  //     const newCartItem = { product, quantity };
  //     return { ...state, cart: [...state.cart, newCartItem] };
  //   }
  // }),
  // on(ProductActions.increaseQuantity, (state, { productId }) => {
  //   const updatedCart = state.cart.map((item:any) =>
  //     item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item
  //   );
  //   return { ...state, cart: updatedCart };
  // }),
  // on(ProductActions.decreaseQuantity, (state, { productId }) => {
  //   const updatedCart = state.cart.map((item:any) =>
  //     item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item
  //   ).filter((item:any) => item.quantity > 0);
  //   return { ...state, cart: updatedCart };
  // })
);
  // on(ProductActions.deleteProduct, (state, { id }) => ({ ...state, products: state.products.filter((p:any) => p.id !== id)} )),
  // on(ProductActions.updateProduct, (state, {id, updatedProduct }) => {
  //   console.log(id+1);
  //   console.log(updatedProduct);
  //   const updatedProducts = state.products.map((p:any)  => p.id === id ? { ...p, ...updatedProduct } : p);
  //   return { ...state, products: updatedProducts };
  // }),

