import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
@Input() cartItems:any[]=[]
clickedProducts: any[] = [];

carttotal=0
constructor(private productService:ProductService ){
  this.clickedProducts = this.productService.getClickedProducts();
}

// ngOnInit(){
//   this.msg.getMsg().subscribe((product:any)=>{
    
//     console.log(product)
//     this.cartItems.push({
//       name:product.name,
//       quantity:product.quantity,
//       price:product.price,
//       currency:product.currency,
//     })
//   })
// }
handleIncrease(item:any){
  if(item.quantity >=5){
    alert("out of stock")
    return
  }
  else
  item.quantity++;
}
handleDecrease(item:any){
  if(item.quantity>0)
  item.quantity--
}
cancelcart(item:any){
  
  this.productService.removeClickedProduct(item);
  this.clickedProducts = this.productService.getClickedProducts();
}



ngOnInit(){
  this.clickedProducts.forEach(item => {
    if(item.currency==='$'){
      this.carttotal+=(item.quantity*(item.price*83.25))
    }
    else if(item.currency==='€'){
      this.carttotal+=(item.quantity*(item.price*89.42))
    }
    else if(item.currency==='£'){
      this.carttotal+=(item.quantity*(item.price*103.16))
        }
    else if(item.currency==='₹'){
    this.carttotal+=((item.quantity*item.price))
    }
  });
}
}

