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
    // alert("logging out")
    this.cookie.deleteAll();
    
    // this.cookie.delete('isAuthorized');
    // this.cookie.delete('name');
    // this.cookie.delete('userId');
    // alert(this.cookie.check('isAuthorized'));
    this.route.navigate(['/auth/login']);
  }
}
