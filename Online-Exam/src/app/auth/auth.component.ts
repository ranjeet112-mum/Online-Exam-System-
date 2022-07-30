import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private route : Router,private cookie : CookieService ) { }

  ngOnInit(): void {
    if(this.cookie.check('isAuthorized')){
      if(this.cookie.get('name') === 'admin')
      {this.route.navigate(['/admin/dashboard'])}
      else {
        this.route.navigate(['/user/dashboard'])
      }
    }
  }

}
