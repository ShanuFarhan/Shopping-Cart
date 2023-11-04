import { Component,Input } from '@angular/core';
// import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  savedProducts:any=[]
  olddata:any
  isEdit=false
  constructor(){
    
    const storedData = localStorage.getItem('data');
    if (storedData) {
      this.savedProducts = JSON.parse(storedData);
      
    }}
    DeleteProduct(item:any){
      const index = this.savedProducts.indexOf(item);
      if (index !== -1) {
    this.savedProducts.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(this.savedProducts));
  }
    }
    editProduct(item:any){
      this.olddata=JSON.stringify(item)
      // item.forEach((element:any) => {
      //   element.isEdit=false
      // });
      item.isEdit=true;

    }
    update(item:any){
      // console.log(this.savedProducts);
      localStorage.setItem('data',JSON.stringify(this.savedProducts))
      item.isEdit=false
  }    
    cancel(item:any){
      const oldObj=JSON.parse(this.olddata)
      item.name=oldObj.name;
      item.price=oldObj.price
      item.isEdit=false
    }
   
}