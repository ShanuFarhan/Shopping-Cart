import { Component,Input } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';
// import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';
import {MatDialog} from "@angular/material/dialog"
import { EditproductComponent } from '../editproduct/editproduct.component';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [];
  showEditForm = false;
  selectedProduct: any | null;
  savedProducts:any=[]
  olddata:any
  isEdit=false
  constructor(private productService:ProductService){
    
    const storedData = localStorage.getItem('data');
    if (storedData) {
      this.savedProducts = JSON.parse(storedData);
      
    }}
    DeleteProduct(item:any){
      const index = this.savedProducts.indexOf(item);
      if (index !== -1) {
    this.savedProducts.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(this.savedProducts));
  }
    }
    // editProduct(item:any){
    //   this.dialog.open(EditproductComponent)
    // }
    update(item:any){
      // console.log(this.savedProducts);
      localStorage.setItem('data',JSON.stringify(this.savedProducts))
      item.isEdit=false
  }    
    cancel(item:any){
      const oldObj=JSON.parse(this.olddata)
      item.name=oldObj.name;
      item.price=oldObj.price
      item.isEdit=false
    }
    editProduct(product: any) {
      this.selectedProduct = product;
      this.showEditForm = true;
    }
    
    onProductSave(updatedProduct: any) {
      // Call your product service to update the product
      this.productService.updateProduct(updatedProduct).subscribe(() => {
        // After successful update, hide the edit form
        this.showEditForm = false;
      });
    }
    
    onProductCancel() {
      this.showEditForm = false;
    }
    
   
}