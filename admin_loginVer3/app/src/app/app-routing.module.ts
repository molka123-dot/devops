import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { CartsComponent } from './carts/components/carts/carts.component';
import { AllPtoductsComponent } from './products/components/all-ptoducts/all-ptoducts.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';

const routes: Routes = [
  {path: "Admin" , component: LoginComponent},
  {path: "products" , component: AllPtoductsComponent},
  {path: "details/:id" , component: ProductsDetailsComponent},
  {path: "cart" , component: CartsComponent},
  {path: "**" , redirectTo:"Admin" , pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
