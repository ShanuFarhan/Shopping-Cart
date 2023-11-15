import { Component} from '@angular/core';
import * as ProductActions from '../../store/product/product.actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[]=[];
  showEditForm = false;
  selectedProduct: any | null;
  savedProducts:any=[]
  olddata:any
  isEdit=false
  constructor(private store:Store,private router:Router,private productservice:ProductService){}
    
    // const storedData = localStorage.getItem('data');
    // if (storedData) {
    //   this.savedProducts = JSON.parse(storedData);
      
    // }
    ngOnInit() {
      this.store.dispatch(ProductActions.loadProducts());
      this.store.select((state:any) => state.products).subscribe((products) => {
        this.products = products;
      });
    }
  
  //   DeleteProduct(item:any){
  //     const index = this.products.indexOf(item);
  //     if (index !== -1) {
  //     this.products.splice(index, 1);
      
  // }
  //   }
  deleteProduct(productId:string) {
    // console.log(productId);
    this.store.dispatch(ProductActions.deleteProduct({ productId }));

      // this.productservice.deleteProduct(productId).subscribe(()=>{
      //   this.store.dispatch(ProductActions.loadProducts())
      //   console.log("Product deleted succussfully");
      // },
      // (error)=>{
      //   console.log("error",error);
        
      // }
      // );
    }
  
    
      // if (confirm('Are you sure you want to delete this product?')) {
      //   this.productService.deleteProduct(index);
      //   this.productService.getProducts().subscribe(res=>{
      //     this.products=res
      //   })
        
      // }
      // this.productService.removeClickedProduct(index);
      //   this.products=this.productService.getClickedProducts()
      // const Index=this.productService.getClickedProducts().indexOf(index);
      // if(Index!=-1){
      //   this.productService.getClickedProducts().splice(Index,1)
      // }
    
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