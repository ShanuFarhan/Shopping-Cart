import { Component, Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
@Input() cartItems:any

constructor(private msg:MessengerService){}

ngOnInit(){
  this.msg.getMsg().subscribe((product:any)=>{
    
    // console.log(product)
    this.cartItems.push({
      name:product.name,
      quantity:product.quantity,
      price:product.price,
      currency:product.currency,
    })
    console.log(this.cartItems);

  })
}
cancelcart(item:any){
  const index = this.cartItems.indexOf(item);
    if (index !== -1) {
    this.cartItems.splice(index, 1);
}
}
}
