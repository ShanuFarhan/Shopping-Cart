import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
@Input() cartItems:any[]=[]
@Input() quantity:number=1
clickedProducts:any[]=[]
item:any[]=[]

carttotal=0
constructor(private productService:ProductService ){

  this.productService.getCartItems().subscribe(res=>{
    this.clickedProducts=res
    // console.log(this.clickedProducts);
  })
}

handleIncrease(item:any){
  if(item.quantity >=5){
    alert("out of stock")
    return
  }
  else
  item.quantity++;
// localStorage.setItem("clickedProducts",JSON.stringify(this.clickedProducts))
// this.productService.addToCart(item.quantity).subscribe(res=>{
//   console.log(res);
// })
  // this.clickedProducts=item.quantity
}
handleDecrease(item:any){
  if(item.quantity>0)
    item.quantity--
  // this.clickedProducts=item.quantity
  // localStorage.setItem('clickedProducts',JSON.stringify(this.clickedProducts))

}
cancelcart(item:any){
  this.productService.removeFromCart(item.id).subscribe((response) => {
    console.log('Product removed from cart:', response);
  });
}
ngOnInit(item:any){
  this.productService.getCartItems().subscribe(res=>{
    res.quantity=0
    this.clickedProducts=res
    // for(let i in this.clickedProducts){
    //   if(this.clickedProducts[i].name==item.name){
    //     this.clickedProducts[i].quantity++
    //   }
    //   else{
    //     this.productService.addToCart(item).subscribe(res=>{
    //       this.clickedProducts=res
    //     })
    //   }
    // }
  this.clickedProducts.forEach(item => {
    console.log(item,"item");
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

})
  

}
}

