import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';

const routes: Routes = [
  {path:"",
  component:LoginPageComponent
},
  {path:"addproduct",
  component:AddProductComponent
},
{
  path:"productlist",
  component:ProductListComponent
},
{
  path:"productdisplay",
  component:ProductDisplayComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
