import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { 

  }
  createuser(model: any){
    return this.http.post('https://api.storerestapi.com/auth/register' ,model)
  }
  getUsers(){
    return this.http.get('https://fakestoreapi.com/auth/login')
  }
}
