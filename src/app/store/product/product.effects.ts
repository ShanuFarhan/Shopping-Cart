import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ProductService } from '../../services/product.service';
import * as ProductActions from './product.actions';
import { map, mergeMap,catchError } from 'rxjs/operators';
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
