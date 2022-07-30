import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Login } from '../../login';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login = { username: '', password: '', role: 'user' };
  isusernameEmpty: boolean = true;
  constructor(private auth: AuthService, private route: Router, private cookie : CookieService) {}
  username: any;
  usrMessage: any;
  password: any;
  paswordMessage: any;
  notFound: any;

  ngOnInit(): void {
    this.username = document.getElementsByName('username')[0];
    this.usrMessage = document.getElementsByName('usrmessage')[0];
    this.password = document.getElementsByName('password')[0];
    this.paswordMessage = document.getElementsByName('pswdmessage')[0];
    this.notFound = document.getElementsByName('notfound')[0];
  }

  Authenticate(login: Login) {
    this.username.style.backgroundColor = 'rgba(255,255,255,.5)';
    // this.usrMessage.style.visibility = "hidden";
    this.password.style.backgroundColor = 'rgba(255,255,255,.5)';
    // this.paswordMessage.style.visibility = "hidden";

    // todo: validate if all the fields are filled or not, and set visibility of the same to visible
    if (login.username === '' || !(login.username.includes('@') && login.username.includes('.'))) {
      this.username.style.backgroundColor = 'rgba(237,67,55,.5)';
      this.usrMessage.style.visibility = 'visible';
    } else if (login.password === '') {
      this.password.style.backgroundColor = 'rgba(237,67,55,.5)';
      this.paswordMessage.style.visibility = 'visible';
    } else {
      // todo: call the service and if user doesnt exists set visisbility of #notfound to visible

      this.auth.Authenticate(login).subscribe((data) => {
        console.log(data[0]);
        // (data);
        this.cookie.set("isAuthorized", 'true' );
        
        if(data[0].name === undefined){
          this.cookie.set("userId",'1');
          this.cookie.set("name", 'admin' );
        this.route.navigate(['/admin/dashboard']);

        }else {
          this.cookie.set("userId", data[0].userId );
          this.cookie.set("name", data[0].name );
        this.route.navigate(['/user/dashboard']);

        }
        // alert(data);
      },err => {
        console.log(err);
        this.notFound.innerText = err.error;
        this.notFound.style.visibility = 'visible';
        
      })


    }
  }
  ForgotPassword(username: string) {
    if (username === '') {
      this.username.style.backgroundColor = 'rgba(237,67,55,.5)';
      this.usrMessage.style.visibility = 'visible';
    } else {
      // todo: call the service to check if the email is present or not

      this.route.navigate(['/auth/resetpassword',username]);
    }
  }
}
