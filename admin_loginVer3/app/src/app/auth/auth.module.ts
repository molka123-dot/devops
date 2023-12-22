import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
//import { RegisterComponent } from './components/register/register.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    ],

  imports: [
    SharedModule,
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule

  ],
  exports : [
    LoginComponent,
    
  ]
})
export class AuthModule { }
