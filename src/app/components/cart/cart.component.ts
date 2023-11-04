import { Component, Input,OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { CartItemComponent } from '../cart-item/cart-item.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
  cartItems: any[] = [];
  savedProducts:any
 
  
}
