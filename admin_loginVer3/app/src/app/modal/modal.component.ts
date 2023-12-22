import { Component ,OnInit} from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { CartsComponent } from '../carts/components/carts/carts.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit{
  products:any[] = [];
  constructor(public modalRef: MdbModalRef<ModalComponent>,
    public cart:CartsComponent) {}
    ngOnInit(): void {
      this.products = this.cart.products;
      
    }
  
}