import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AllPtoductsComponent } from '../all-ptoducts.component';
import { ProductComponent } from '../../product/product.component';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit{
 categ :any[]=[]
 base64: any =''
 form!:FormGroup 

  constructor(public modalRef: MdbModalRef<ModalComponent>, private prod :AllPtoductsComponent , private build:FormBuilder) {}
    ngOnInit(): void {
      
      
    }
    getCateg(enent:any){

    }

    getImagePath(event:any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>{
      this.base64 = reader.result
    };
    }
    addProduct(){
      alert(" Done Successfully ")
    }


   
  
}