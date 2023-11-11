import { Component,Input} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() item:any=[]
  @Input() savedProducts:any[]=[]
  clickedProducts:any=[]
  quantity:number=1
  showCounter: boolean = false;
// constructor(private productService:ProductService ){
//   this.clickedProducts = this.productService.getClickedProducts();
// }
  handleIncrease(count:any){
    // console.log(count.quantity);
    if(count.quantity>=5){
      alert("out of stock")
      return
    }
    else{
    count.quantity++;
    }
    // count.quantity=this.quantity
    this.quantity=count.quantity
    // localStorage.setItem('clickedProducts',JSON.stringify(this.clickedProducts))
  }
  handleDecrease(count:any){
    if(count.quantity>1)
      count.quantity--;
      // count.quantity=this.quantity-count.quantity
      this.quantity=count.quantity
      localStorage.setItem('clickedProducts',JSON.stringify(this.clickedProducts))
  }
  addtocart(item:any) {
    
        // this.productService.addClickedProduct(item);
      
    
  }
}

