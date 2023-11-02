import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators,FormBuilder} from '@angular/forms'
// import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  myform:any={}
  product:any={}
  // productKey:string=''
  constructor(private fb:FormBuilder){}
  submit=false
  ngOnInit(){
    this.myform=this.fb.group({
      name:['',Validators.required],
      gender:['',Validators.required],
      price:['',Validators.required],
      currency:['',Validators.required],
      color:['',Validators.required],
      quantity:['',Validators.required],
      image:['',Validators.required]
    })
    
  }
  get f(){
    return this.myform.controls
  }
  onSubmit(){
    this.submit=true
    // this.productKey = `product_${new Date().getTime()}`;
    // localStorage.setItem(this.productKey, JSON.stringify(this.myform.value));
    if(!this.myform.invalid)
    this.product=Object.assign(this.product,this.myform.value)
  this.addProduct(this.product)
  }
  handleReset(){
    this.myform.reset()
  }
  addProduct(product:any){
    let products=[];
    if(localStorage.getItem('data')){
    products=JSON.parse(localStorage.getItem('data')as any)
    products=[product,...products]
  }else{
    products=[product];
  }
  localStorage.setItem('data',JSON.stringify(products))
  // console.log(products);
  
}
}