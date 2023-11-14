import { Component, Input,OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
  cartItems: any[] = [];
  savedProducts:any=[]

  constructor(private productService:ProductService){
    
  }
  ngOnInit(){
    
  }  
}
