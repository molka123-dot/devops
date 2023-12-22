import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPtoductsComponent } from './components/all-ptoducts/all-ptoducts.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { RouterLink } from '@angular/router';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    
    AllPtoductsComponent,
    ProductsDetailsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    NgbPaginationModule, 
    NgbAlertModule,

  ],
  bootstrap: [AllPtoductsComponent]
})
export class ProductsModule { }
