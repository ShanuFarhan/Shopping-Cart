import { Component,Input } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';
// import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';
import {MatDialog} from "@angular/material/dialog"
import { EditproductComponent } from '../editproduct/editproduct.component';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
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
  constructor(private productService:ProductService,private router:Router){
    
    // const storedData = localStorage.getItem('data');
    // if (storedData) {
    //   this.savedProducts = JSON.parse(storedData);
      
    // }
  }
  
    ngOnInit(): void {
      this.productService.getProducts().subscribe(res=>{
        this.products=res
      })
    }
  
  //   DeleteProduct(item:any){
  //     const index = this.savedProducts.indexOf(item);
  //     if (index !== -1) {
  //     this.savedProducts.splice(index, 1);
  //     localStorage.setItem('data', JSON.stringify(this.savedProducts));
  // }
  //   }
    deleteProduct(index: number) {
      if (confirm('Are you sure you want to delete this product?')) {
        this.productService.deleteProduct(index);
        this.productService.getProducts().subscribe(res=>{
          this.products=res
        })
        
      }
      // this.productService.removeClickedProduct(index);
      //   this.products=this.productService.getClickedProducts()
      // const Index=this.productService.getClickedProducts().indexOf(index);
      // if(Index!=-1){
      //   this.productService.getClickedProducts().splice(Index,1)
      // }
    }
    // editProduct(item:any){
    //   this.dialog.open(EditproductComponent)
    // }
  //   update(item:any){
  //     // console.log(this.savedProducts);
  //     localStorage.setItem('data',JSON.stringify(this.savedProducts))
  //     item.isEdit=false
  // }    
    // cancel(item:any){
    //   const oldObj=JSON.parse(this.olddata)
    //   item.name=oldObj.name;
    //   item.price=oldObj.price
    //   item.isEdit=false
    // }
    editProduct(index: number) {
      this.router.navigate(['/addproduct', index]);
    }
    
    // onProductCancel() {
    //   this.showEditForm = false;
    // }
    
   
}