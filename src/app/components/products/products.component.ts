import { Component,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() item:any=[]
  clickedProducts:any[]=[]
  @Input() quantity:number=1
  isInCart:boolean=false
  showCounter: boolean = false;
  constructor(private productService:ProductService,private route: ActivatedRoute){
    this.productService.getCartItems().subscribe((result)=>{
      this.clickedProducts=result
    })
    this.productService.isInCart(this.item.id).subscribe(res=>{
      this.isInCart=res
    })
  }
  
  handleIncrease(item:any){
    if(this.quantity>=5){
      alert("out of stock")
      return
    }
    else{
      this.quantity++;
    }
    item.quantity=this.quantity
    
    
    // console.log(item.quantity); 
    // this.productService.addToCart(item.quantity).subscribe(res=>[
    //   console.log(res.quantity)
      
    // ])
    // this.quantity=item.quantity
    // console.log(this.quantity);
    // console.log(item.quantity);
    // const id = +this.route.snapshot.params['id'];
    // const newQuantity=item.quantity
    // this.productService.updateCart(id,newQuantity).subscribe(res=>{
    //   // if(res.name===item.name){
    //   //   res.quantity++;
    //   // }else{
    //   //   res.quantity--
    //   // }
    //   console.log(res.quantity);
    //   // this.quantity=res.quantity
    // })
    
    // this.productService.updateCart(item.quantity).subscribe(res=>{
    //   console.log("updated",res);
      
    // })
        // count.quantity=this.quantity
    // console.log(count.quantity);
    // this.quantity=count.quantity
    // localStorage.setItem('clickedProducts',JSON.stringify(this.clickedProducts))
  }
  handleDecrease(item:any){
    if(this.quantity>1)
      this.quantity--;
    item.quantity=this.quantity
    // console.log(item.quantity);
    // this.productService.addToCart(item.quantity).subscribe((res)=>{
    //   console.log("Quantity added",res.quantity); 
    // })
      // this.quantity=item.quantity
      // this.productService.addToCart(item).subscribe(res=>{
      //   console.log(res.quantity);
        
      // })
    // console.log(this.quantity);
  }
  addtocart(item:any) {
    
    console.log("Item",item.quantity);
    this.productService.addToCart(item).subscribe((res)=>{
      this.isInCart=true
          console.log("added",res);
      })  
    // console.log(item); const existingProduct = this.cart.find(p => p.name === product.name);
    // console.log(item.name);
    // this.productService.getCartItems().subscribe((res)=>{
    //   console.log("Quantity",res.quantity);
      // res.forEach((elem:any) => {
      //   if(elem.name===item.name){
      //     // console.log(elem.name);
      //     // console.log(item.name);
      //     elem.quantity++
      //}
      //   else{
          
      // };
      // else{
      //   this.productService.addToCart(item).subscribe((res)=>{
      
      //     console.log("added",res);
      //   })   
      // }
      
    // })
    
  
    // if (existingProduct) {
    //   existingProduct.quantity++;
    // } else {
  // })
}
gotocart(item:any){
    
}
  ngOnInit(){
    // this.productService.getCartItems().subscribe(res=>{
    //   console.log(res,"cart");
    //   if(res.name==this.item.name){

    //   }
    // })
    // this.clickedProducts=this.item;
    // console.log("click",this.clickedProducts);
    
  }
  
}

