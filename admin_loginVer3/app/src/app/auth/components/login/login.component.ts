import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
   users:any[] = [];

  constructor(private router:Router,private fb:FormBuilder,private service:ServicesService) { }

  ngOnInit(): void {
    this.getUsers();
    this.createForm();
    this.getUsers()
  }

  createForm(){
    this.loginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  getUsers(){
    this.service.getUsers().subscribe((res:any) =>{
      this.users = res
      console.log(this.users)
    })
  }
  submit(){
    const model ={
      username:this.loginForm.value.username,
      password:this.loginForm.value.password
    }

     let index = this.users.findIndex(item =>item.username == this.loginForm.value.username && item.password == this.loginForm.value.password)
     alert(" Log In successfully");

  this.router.navigate(['/products'])
  }

}
