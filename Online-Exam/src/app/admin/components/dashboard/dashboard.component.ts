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
    if(sessionStorage.getItem('isAuthorized') != null){
      this.adminid = sessionStorage.getItem('userId');
      this.name = sessionStorage.getItem('name');
    }
  }

  Logout(){
    // alert("logging out")
    sessionStorage.clear();
    // this.cookie.deleteAll();
    // console.log(sessionStorage.getItem('wrongname'));
    // console.log(sessionStorage.getItem('name'));
    // sessionStorage.removeItem('name');
    // alert("wait here till i come");
    // this.cookie.delete('isAuthorized');
    // this.cookie.delete('name');
    // this.cookie.delete('userId');
    // alert(this.cookie.check('isAuthorized'));
    this.route.navigate(['/auth/login']);
  }
}
