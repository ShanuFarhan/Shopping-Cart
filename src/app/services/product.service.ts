

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  private apiUrl ='https://653fb25a9e8bd3be29e1100e.mockapi.io/addtocart/shopping';
  private carturl='https://653fb25a9e8bd3be29e1100e.mockapi.io/addtocart/cart';

  constructor(private http: HttpClient) {}

  addProduct(productData: any): Observable<any> {
    return this.http.post(this.apiUrl, productData);
  }
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  deleteProduct(id: any) {
    const deleteUrl = `${this.apiUrl}/${id.id}`;
    return this.http.delete(deleteUrl);
  }
  updateProduct(id: any, updatedProduct: any): Observable<any> {
    const url = `${this.apiUrl}/${id+1}`;
    // console.log("url",url);
    return this.http.put<any>(url, updatedProduct);
  }
  isInCart(productId: string): Observable<boolean> {
    return this.getCartItems().pipe(map((cart:any) => cart.some((item:any) => item.productId === productId)));
  }
  addToCart(product: any): Observable<any> {
    console.log(product);
    return this.http.post(`${this.carturl}`,product);
  }
  updateCart(newQuantity:any){
    const url=`${this.carturl}`
    return this.http.put(url,{newQuantity})
  }
  getCartItems(): Observable<any> {
    return this.http.get(`${this.carturl}`);
  }
  removeFromCart(productId: string): Observable<any> {
    return this.http.delete(`${this.carturl}/${productId}`);
  }
}
