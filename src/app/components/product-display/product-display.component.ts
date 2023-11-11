import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent {
savedProducts:any[]=[]
constructor(private productService:ProductService)
{
 this.productService.getProducts().subscribe(res=>{
  this.savedProducts=res
 })
  
}
}
