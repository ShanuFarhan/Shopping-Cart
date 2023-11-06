import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private clickedProducts: number[] = [];

  constructor() {
    const savedProducts = localStorage.getItem('clickedProducts');
    if (savedProducts) {
      this.clickedProducts = JSON.parse(savedProducts);
    }
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
  
removeClickedProduct(productId: number): void {
  const productIndex = this.clickedProducts.indexOf(productId);
  if (productIndex !== -1) {
    this.clickedProducts.splice(productIndex, 1);
    localStorage.setItem('clickedProducts', JSON.stringify(this.clickedProducts));
  }
}
}
