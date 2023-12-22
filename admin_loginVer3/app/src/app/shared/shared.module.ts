import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FooterComponent,
    
  
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    ReactiveFormsModule,
    SelectComponent,
    FormsModule
  ]
})
export class SharedModule { }
