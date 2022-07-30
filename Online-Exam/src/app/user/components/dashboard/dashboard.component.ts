import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userId : any;
  name : any;
  constructor(private router : Router ,private route: ActivatedRoute,private cookie : CookieService) { }
// ! take out this service services
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('user'));
    // todo 
    // console.log(this.cookie.check('isAuthorized'));
    
    if(this.cookie.check('isAuthorized')){
      this.userId = this.cookie.get('userId');
      this.name = this.cookie.get('name');
      // alert(this.data); 
    }
  }

  Logout(){
    this.cookie.deleteAll('/', 'http://localhost:5000');

    // this.cookie.deleteAll();
    // this.cookie.delete('name');
    // this.cookie.delete('userId');
    // alert(this.cookie.check('isAuthorized'));
    this.router.navigate(['/auth/login']);
  }

}
