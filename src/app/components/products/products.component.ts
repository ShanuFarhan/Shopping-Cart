import { Component,EventEmitter,Input, Output} from '@angular/core';
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
  quantity:number=0
  showCounter: boolean = false;
//  constructor(private msg:MessengerService){
//   const storedData = localStorage.getItem('data');
//     if (storedData) {
//       this.savedProducts = JSON.parse(storedData);
//     }
//  }
constructor(private productService:ProductService ){
  this.clickedProducts = this.productService.getClickedProducts();
  this.clickedProducts.quantity=0
}
  handleIncrease(count:any){
    // console.log(count.quantity);
    if(this.quantity>=5){
      alert("out of stock")
      return
    }
    else{
    this.quantity++;
    }
    count.quantity=this.quantity
    
    // this.quantity=count.quantity
    localStorage.setItem('clickedProducts',JSON.stringify(this.clickedProducts))

  }
  handleDecrease(count:any){
    if(this.quantity>0)
      this.quantity--;
      count.quantity=this.quantity-count.quantity
      // this.quantity=count.quantity
      localStorage.setItem('clickedProducts',JSON.stringify(this.clickedProducts))
  }
  addtocart(item:any) {

      this.productService.addClickedProduct(item);

  }
}

