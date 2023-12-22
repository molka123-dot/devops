import { Component, OnInit } from '@angular/core';
//import { MDBModalService } from 'angular-bootstrap-md';
import { Product } from '../../models/products';

import { ProductsService } from '../../services/products.service';
import { ModalComponent } from 'src/app/products/components/all-ptoducts/modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FormGroup } from '@angular/forms';
//import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-all-ptoducts',
  templateUrl: './all-ptoducts.component.html',
  styleUrls: ['./all-ptoducts.component.css'],
  providers:[MdbModalService]
})
export class AllPtoductsComponent implements OnInit {
  modalRef: MdbModalRef<AllPtoductsComponent> | null = null;
  products:Product[]=[]
  categ:String[]=[]
  loading:boolean = false
  cartProducts:any[]=[]

  constructor(private service:ProductsService ,private modalService: MdbModalService)  { }

  ngOnInit(): void {
    this.getProducts()
    this.getCateg()
  }
 getProducts(){
  this.loading=true
  this.service.getAllProducts().subscribe((res:any) => {
    this.products = res
    this.loading=false

  }, error => {     this.loading=false
    alert(Error)}       );
 }

 getCateg(){
  this.loading=true
  this.service.getAllCateg().subscribe((res:any) => {
    console.log(res)
    this.categ = res
    this.loading=false
    

     
  }, error => {     this.loading=false
    alert(Error)}       );
 }

 filterCateg(event: any){
  let value = event.target.value;
  if(value == "all"){
    this.getProducts()
  }else{
    this.getProductsCateg(value)
  }
 }

 getProductsCateg(keyword: string){
  this.loading=true

  this.service.getProducysByCateg(keyword).subscribe((res:any) => {
    this.products = res
    this.loading=false

     
  }, error => {    this.loading=false
    alert(Error)}       );
 }
 
 addToCart(event:any){
  if("cart" in localStorage){
    this.cartProducts= JSON.parse(localStorage.getItem("cart")!) //send data
    let exist = this.cartProducts.find(item => item.item.id == event.item.id)
    if(exist){
      alert("products is already in your cart")
    }else{
      this.cartProducts.push(event) //update data
     localStorage.setItem("cart",JSON.stringify(this.cartProducts)) //recieve data

    }

  }else{
    this.cartProducts.push(event) //update data
     localStorage.setItem("cart",JSON.stringify(this.cartProducts)) //recieve data

  }


}
view()
{
  this.modalRef = this.modalService.open(ModalComponent, {
    data: null
  });  

}

update(item: any ){
  this.modalRef = this.modalService.open(ModalComponent, {
    data: null
  });
}
}
