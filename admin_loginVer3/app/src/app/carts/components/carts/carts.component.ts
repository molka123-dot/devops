import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { endWith } from 'rxjs';
import { Product } from 'src/app/products/models/products'; 
import { CartsService } from '../../services/carts.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modal } from 'bootstrap';
import { ProductsService } from 'src/app/products/services/products.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'src/app/modal/modal.component';
import { provideRoutes } from '@angular/router';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css'],
  providers:[MdbModalService]
})

export class CartsComponent implements OnInit {
  modalRef: MdbModalRef<CartsComponent> | null = null;

  constructor(private service:CartsService ,private build:FormBuilder ,private productService: ProductsService ,private modalService: MdbModalService) { }
 carts:any[] = [];
 cartProducts:any[] = []
 form!:FormGroup;
 products:any[] = [];
 total = 0;
 details :any;
  ngOnInit(): void {
    this.form = this.build.group({
      start: [''],
      end: ['']
    })
    this.getAllCarts()
   
  }

getAllCarts()
{
  this.service.getAllCarts().subscribe((res:any) =>{
   this.carts = res
  })
}
applyFilter(){
  let date = this.form.value
  this.service.getAllCarts(date).subscribe((res:any) =>{
    this.carts = res
   })}

deleteCart(id:number){
  this.carts.splice(id, 1);

     this.service.deleteCart(id).subscribe(res =>{

      //this.getAllCarts()
      localStorage.setItem("cart",JSON.stringify(this.carts)) //recieve data update

      

    })
    alert("Cart Deleted successfully")


    


   }
 

view(index: number){
  

 /* this.modalRef = this.modalService.open(ModalComponent, {
    data: { title: 'Custom title' },
  });*/
  //console.log(this.modalRef);
   this.products = []
    this.details = this.carts[index];
    for(let x in this.details.products){
      this.productService.getProductById(this.details.products[x].productId).subscribe(res =>{
      this.products.push({item: res , quantity:this.details.products[x].quantity})
      })
    }
   // this.modalRef = this.modalService.open(ModalComponent)


    this.modalRef = this.modalService.open(ModalComponent, {
      data: this.products
    });
     console.log(this.details)
   }   
   

}
