import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private cookie: CookieService, private router : Router) { }

  ngOnInit(): void {
    if(!(this.cookie.check('isAuthorized')) )
    this.router.navigate(['/auth/login']);
    else if(this.cookie.get('name') != 'admin') {
      this.router.navigate(['/auth/login']);
    }
  } 

}
