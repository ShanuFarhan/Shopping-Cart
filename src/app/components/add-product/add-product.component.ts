import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators,FormBuilder} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

// import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  myform:any={}
  product:any={}
  isEditing=false
  // productKey:string=''
  constructor(private fb:FormBuilder ,private productService:ProductService,private route: ActivatedRoute,private router: Router){}
  submit=false
  ngOnInit(){
    this.myform=this.fb.group({
      name:[' ',Validators.required],
      gender:[' ',Validators.required],
      price:[' ',Validators.required],
      currency:[' ',Validators.required],
      color:[' ',Validators.required],
      quantity:[' ',Validators.required],
      image:[this.product.image,[Validators.required]]
    })

    this.route.params.subscribe(params => {
      const productId = +params['id'];
      if (!isNaN(productId)) {
        this.isEditing = true;
        this.productService.getProducts().subscribe(res=>{
          this.product={...res[productId]}
          console.log(this.product);
          
        })
        // const products: = this.productService.getProducts();
        // this.product = { ...products[productId] };
        // console.log(this.product);
        
      }
    });
  }
  get f(){
    return this.myform.controls 

  }
  // onSubmit(){
  //   this.submit=true
  //   if(!this.myform.invalid)
  //   this.product=Object.assign(this.product,this.myform.value)
  //   this.addProduct(this.product)
  // }
  handleReset(){
    this.myform.reset()
  }
  saveProduct() {
    console.log(this.f);
    this.submit=true
    if (this.isEditing) {
      // if(!this.myform.invalid){
      const products:any = this.productService.getProducts();     
      const productId = +this.route.snapshot.params['id'];
      products[productId] = this.product;
      this.productService.updateProduct(productId, this.product);
      this.router.navigate(['/productlist']);
      // }
    } else {
      if(!this.myform.invalid){
      this.productService.addProduct(this.product);
      this.router.navigate(['/productlist']);
      }
    }
}
}
//   addProduct(product:any){
//     let products=[];
//     if(localStorage.getItem('data')){
//     products=JSON.parse(localStorage.getItem('data')as any)
//     products=[product,...products]
//   }else{
//     products=[product];
//   }
//   localStorage.setItem('data',JSON.stringify(products))
// }

