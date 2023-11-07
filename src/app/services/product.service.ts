import { Injectable } from '@angular/core';
import { ProductsComponent } from '../components/products/products.component';
import { Observable, of } from 'rxjs';  
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  SavedProducts:any[]=[]
  private clickedProducts: number[] = [];

  constructor() {
    const savedProducts = localStorage.getItem('clickedProducts');
    if (savedProducts) {
      this.clickedProducts = JSON.parse(savedProducts);
    }
    const storedData = localStorage.getItem('data');
    if (storedData) {
      this.SavedProducts = JSON.parse(storedData);
    }
  }
  getProducts(): Observable<any[]> {
    return of(this.SavedProducts);
  }

  getClickedProducts(): number[] {
    return this.clickedProducts;
  }

  addClickedProduct(productId: number): void {
    if (!this.clickedProducts.includes(productId)) {
      this.clickedProducts.push(productId);
      localStorage.setItem('clickedProducts', JSON.stringify(this.clickedProducts));
    }
  }
  updateProduct(updatedProduct:any ): Observable<any> {
    const existingProductIndex = this.SavedProducts.findIndex(
      (p) => p.id === updatedProduct.id
    );
    if (existingProductIndex !== -1) {
      this.SavedProducts[existingProductIndex] = { ...updatedProduct };
      this.saveProductsToLocalStorage()
      return of(updatedProduct);
    }
    return of(null); 
  }
  private saveProductsToLocalStorage() {
    localStorage.setItem('data', JSON.stringify(this.SavedProducts));
    console.log(this.SavedProducts);
    
  }
removeClickedProduct(productId: number): void {
  const productIndex = this.clickedProducts.indexOf(productId);
  if (productIndex !== -1) {
    this.clickedProducts.splice(productIndex, 1);
    localStorage.setItem('clickedProducts', JSON.stringify(this.clickedProducts));
  }
}
}
