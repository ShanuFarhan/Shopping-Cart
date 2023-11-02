import { Component,Input } from '@angular/core';
// import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products:any=[]
  savedProducts:any=[]
  
  constructor(){
    
    const storedData = localStorage.getItem('data');
    if (storedData) {
      this.savedProducts = JSON.parse(storedData);
      console.log(this.savedProducts);
      
    // const storedData=JSON.parse(localStorage.getItem('data')as any ||[])
    // if(storedData){
    //   this.products=JSON.parse(storedData)
    //   this.savedProducts=storedData
    
    // }
    }}
    editProduct(item:any){
      item.isEdit=true;
    }
    deleteProduct(savedProducts:any){
      console.log("click");
      
      const index = this.savedProducts.indexOf(savedProducts);
      if (index !== -1) {
        this.savedProducts.splice(index, 1);
        localStorage.setItem('formData', JSON.stringify(this.savedProducts));
      }
    }
}
