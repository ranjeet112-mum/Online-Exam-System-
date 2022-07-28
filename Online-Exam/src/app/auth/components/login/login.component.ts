import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Login } from '../../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login = { username: '', password: '', role: 'user' };
  isusernameEmpty: boolean = true;
  constructor(private auth: AuthService, private route: Router) {}
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
    if (login.username === '') {
      this.username.style.backgroundColor = 'rgba(237,67,55,.5)';
      this.usrMessage.style.visibility = 'visible';
    } else if (login.password === '') {
      this.password.style.backgroundColor = 'rgba(237,67,55,.5)';
      this.paswordMessage.style.visibility = 'visible';
    } else {
      // todo: call the service and if user doesnt exists set visisbility of #notfound to visible
      console.log(login);
      console.log(this.auth.Authenticate(this.login));
      if (this.auth.Authenticate(this.login)) {
        this.route.navigate(['/user/dashboard']);
      } else {
        this.notFound.style.visibility = 'visible';
      }
    }
  }
  ForgotPassword(username: string) {
    if (username === '') {
      this.username.style.backgroundColor = 'rgba(237,67,55,.5)';
      this.usrMessage.style.visibility = 'visible';
    } else {
      // todo: call the service to check if the email is present or not

      this.route.navigate(['/auth/forgotpassword']);
    }
  }
}
