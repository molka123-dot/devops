import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './components/carts/carts.component';
import { SharedModule } from '../shared/shared.module';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';





@NgModule({
  declarations: [
    CartsComponent,
    
    
  ],

  imports: [
    CommonModule,
    SharedModule,
    NgbPaginationModule, 
    NgbAlertModule,
    RouterLink
    
    
  ],
  bootstrap: [CartsComponent]

})
export class CartsModule { }
