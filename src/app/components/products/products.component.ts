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
  count:number=0
  showCounter: boolean = false;
//  constructor(private msg:MessengerService){
//   const storedData = localStorage.getItem('data');
//     if (storedData) {
//       this.savedProducts = JSON.parse(storedData);
//     }
//  }
constructor(private productService:ProductService) {
}
  handleIncrease(count:any){
    if(count.quantity>=5){
      alert("out of stock")
      return
    }
    else
    count.quantity++;
  }
  handleDecrease(count:any){
    if(count.quantity>0)
      count.quantity--;
  }
  addtocart(item:any) {

      this.productService.addClickedProduct(item);

  }
}

