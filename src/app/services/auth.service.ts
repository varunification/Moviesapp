import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

login(uname:string, password:string):number{
  if(uname ==='varun' && password==='admin'){
    return 200;
  }
  else{
    return 403;
  }
}



}
