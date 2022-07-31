import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private cookie: CookieService, private router : Router) { }

  ngOnInit(): void {
    if((sessionStorage.getItem('isAuthorized')===null))
    this.router.navigate(['/auth/login']);
    else if (sessionStorage.getItem('name') === 'admin' ){
      sessionStorage.clear();
      this.router.navigate(['/auth/login']);
    }
  }

}
