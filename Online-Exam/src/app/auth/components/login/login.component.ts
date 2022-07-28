import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Login } from '../../login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : Login =  {username : '', password : '', role : 'user' }
 
  constructor(private auth : AuthService,private route : Router) { }

  ngOnInit(): void {
  }

  Authenticate(login : Login){
    console.log(login);
    console.log(this.auth.check(this.login));
    if (this.auth.check(this.login)) {
     this.route.navigate(['/user/dashboard']);
    }
  }
  ForgotPassword(username : string ){
    // const usr = ;

    // if(username === ''){
      // document.getElementsByName('username')[0].style.backgroundColor = "red"; 
    // }
  }
}
