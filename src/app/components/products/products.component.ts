import { Component,EventEmitter,Input, Output} from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() item:any
  @Input() savedProducts:any[]=[]
  count:number=0
  showCounter: boolean = false;
 constructor(private msg:MessengerService){
  // const storedData = localStorage.getItem('data');
  //   if (storedData) {
  //     this.savedProducts = JSON.parse(storedData);
  //   }
 }
  handleIncrease(count:any){
    if(this.count>=this.item.quantity){
      alert("out of stock")
      return
    }
    else
    this.count++;
  }
  handleDecrease(count:any){
    if(this.count>0)
      this.count--;
  }
  addtocart(savedProducts:any) {
    this.msg.sentMsg(savedProducts)    
  }
  }

