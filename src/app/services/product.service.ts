

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://653fb25a9e8bd3be29e1100e.mockapi.io/addtocart/shopping';

  constructor(private http: HttpClient) {}

  addProduct(productData: any): Observable<any> {
    return this.http.post(this.apiUrl, productData);
  }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  deleteProduct(id: any) {
    console.log(id.id);
    const deleteUrl = `${this.apiUrl}/${id.id}`;
    return this.http.delete(deleteUrl);
  }
  updateProduct(id: any, updatedProduct: any): Observable<any> {
    const url = `${this.apiUrl}/${id+1}`;
    // console.log("url",url);
    return this.http.put<any>(url, updatedProduct);
  }
}
