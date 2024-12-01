import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private router: Router) { }

login(uname:string, password:string):number{
  if(uname ==='varun' && password==='admin'){
    return 200;
  }
  else{
    return 403;
  }
}


logout():void{
  this.router.navigate(['login']);
}


}
