import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private cookie : CookieService, private route : Router) { }

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
