import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

/**
 *
 */
constructor(private router: Router, private auth: AuthService) {
  

}

  gotoHome():void{

    this.router.navigate(['home']);



  }

  Logout():void{
    this.auth.logout();

  }

}
