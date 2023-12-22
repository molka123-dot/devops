import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 @Input() data!:Product
@Output() item = new EventEmitter()
addButton:boolean = false
amount:number = 0
  constructor() { }


  ngOnInit(): void {
  }
 
}
