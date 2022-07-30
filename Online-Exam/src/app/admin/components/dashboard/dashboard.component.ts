import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name : any;
  adminid: any;
  constructor(private cookie : CookieService,private route : Router) { }

  ngOnInit(): void {
    if(this.cookie.check('isAuthorized')){
      this.adminid = this.cookie.get('userId');
      this.name = this.cookie.get('name');
    }
  }

  Logout(){

    //Todo: call the log out api 
    console.log("hey logging you out");

    
  }
}
