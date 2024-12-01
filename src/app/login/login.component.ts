import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
 username='';
 password='';
 errorMsg=new Array()
 /**
  *
  */
 constructor(private auth:AuthService, private router: Router) {
  
 }
 ngOnInit(): void {
   
 }


login(){
  if(this.username.trim().length==0){
    this.errorMsg.push("Username is required");
   }else{
    this.errorMsg.splice(0, this.errorMsg.length);
   }
   if(this.password.trim().length==0){
    this.errorMsg.push("Password is required");

   }else{
    this.errorMsg.splice(0, this.errorMsg.length);
   }
   if(this.errorMsg.length==0){
    let res = this.auth.login(this.username.trim(), this.password.trim());
    if(res===200){
      this.errorMsg.splice(0, this.errorMsg.length);
      this.router.navigate(['home'])

    }
    else{
      this.errorMsg.push("Invalid Credentials");
    }
   }
   
}



}
