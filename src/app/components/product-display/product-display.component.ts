import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent {
savedProducts:any[]=[]
 constructor(){
  const storedData = localStorage.getItem('data');
  if (storedData) {
    this.savedProducts = JSON.parse(storedData);
    
  }}
   
}
