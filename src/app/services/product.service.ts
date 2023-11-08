import { Injectable } from '@angular/core';
import { ProductsComponent } from '../components/products/products.component';
import { Observable, of } from 'rxjs';  
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  savedProducts:any=[]
  private clickedProducts: number[] = [];

  constructor() {
    const savedProducts = localStorage.getItem('clickedProducts');
    if (savedProducts) {
      this.clickedProducts = JSON.parse(savedProducts);
    }
    const storedData=localStorage.getItem('data');
    if(storedData){
      this.savedProducts=JSON.parse(storedData)
    }
  }
  getProducts(): Observable<any[]> {
    return of(this.savedProducts);
  }
    
  addProduct(product: any): void {
    this.savedProducts.push(product);
    this.saveProductsToLocalStorage();
  }

  deleteProduct(index: number): void {
    this.savedProducts.splice(index, 1);
    this.saveProductsToLocalStorage();
    localStorage.setItem('clickedProducts', JSON.stringify(this.clickedProducts));
  }
  updateProduct(index: number, updatedProduct: any): void {
    this.savedProducts[index] = updatedProduct;
    this.saveProductsToLocalStorage();
  }
  private saveProductsToLocalStorage() {
    localStorage.setItem('data', JSON.stringify(this.savedProducts));    
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
  // updateProduct(updatedProduct:any ) {
  //   const existingProductIndex = this.savedProducts.findIndex(
  //     (p) => p.id === updatedProduct.id
  //   );
  //   if (existingProductIndex !== -1) {
  //     this.savedProducts[existingProductIndex] = { ...updatedProduct };
  //     this.saveProductsToLocalStorage()
  //     return of(updatedProduct);
  //   }
  //   return of(null); 
  // }
 
removeClickedProduct(productId: number):void {
  const productIndex = this.clickedProducts.indexOf(productId);
  if (productIndex !== -1) {
    this.clickedProducts.splice(productIndex, 1);
    localStorage.setItem("clickedProducts",JSON.stringify(this.clickedProducts))
  }
  
  
}
}
