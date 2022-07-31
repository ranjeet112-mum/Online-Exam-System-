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
    if((sessionStorage.getItem('isAuthorized') === null) )
    this.router.navigate(['/auth/login']);
    else if(sessionStorage.getItem('name') != 'admin') {
      sessionStorage.clear();
      this.router.navigate(['/auth/login']);
    }
  } 

}
