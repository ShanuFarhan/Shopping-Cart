import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ProductService } from '../../services/product.service';
import * as ProductActions from './product.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) => ProductActions.setProducts({ products }))
        )
      )
    )
  );
  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.addProduct),
      mergeMap((action) =>
        this.productService.addProduct(action.product).pipe(map(() => ProductActions.loadProducts()))
      )
    )
  );
  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      mergeMap(action =>
        this.productService.deleteProduct(action.productId).pipe(
          map(() => ProductActions.productDeleted({ productId: action.productId })),
          catchError(error => {
            console.error('Error deleting product:', error);
            return EMPTY; // or return a different action for error handling
          })
        )
      )
    )
  );
  editProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.editProduct),
      mergeMap(action =>
        this.productService.getProduct(action.productId).pipe(
          mergeMap((product,id) =>
            this.productService.updateProduct(id,product).pipe(
              map(updatedProduct => ProductActions.productEdited({ updatedProduct })),
              catchError(error => {
                console.error('Error editing product:', error);
                return EMPTY;
              })
            )
          ),
          catchError(error => {
            console.error('Error fetching product for editing:', error);
            return EMPTY;
          })
        )
      )
    )
  );
  // addToCart$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ProductActions.addToCart),
  //     mergeMap(({ product, quantity }) =>
  //       of({ type: 'https://653fb25a9e8bd3be29e1100e.mockapi.io/addtocart/shopping'}).pipe(
  //         map(() => ProductActions.loadProducts()), 
  //         catchError(() => of({ type: 'Error adding to cart' })),
  //       ),
  //     ),
  //   ),
  // );
//   deleteProduct$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(ProductActions.deleteProduct),
//     mergeMap(({ id }) =>
//       this.productService.deleteProduct(id).pipe(
//         map(() => ProductActions.loadProducts()), // Refresh the product list after deleting
//         catchError(() => of({ type: 'Error deleting product' })),
//       ),
//     ),
//   ),
// );
// updateProduct$ = createEffect(() =>
// this.actions$.pipe(
//   ofType(ProductActions.updateProduct),
//   mergeMap(({ id, updatedProduct }) =>
//     this.productService.updateProduct(id, updatedProduct).pipe(
//       map(() => ProductActions.loadProducts()),
//       catchError(() => of({ type: 'Error updating product' })),
//     ),
//   ),
// ),
// );
  constructor(private actions$: Actions, private productService: ProductService) {}
}
