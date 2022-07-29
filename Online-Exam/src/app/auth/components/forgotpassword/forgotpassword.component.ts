import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent implements OnInit {
  oldpassword: string = '';
  newpassword: string = '';
  confirmpassword: string = '';
  constructor(private auth: AuthService, private route: Router) {}

  ngOnInit(): void {}
  forgotpassword(
    oldpassword: string,
    newpassword: string,
    confirmpassword: string
  ) {
    document.getElementsByName('confirmpassword')[0].style.backgroundColor =
      'rgba(255,255,255,1)';
    document.getElementsByName('confirmpasswordmessage')[0].style.visibility =
      'hidden';
    document.getElementsByName('oldpassword')[0].style.backgroundColor =
      'rgba(255,255,255,1)';
    document.getElementsByName('oldpasswordmessage')[0].style.visibility =
      'hidden';
    document.getElementsByName('newpassword')[0].style.backgroundColor =
      'rgba(255,255,255,1)';
    document.getElementsByName('newpasswordmessage')[0].style.visibility =
      'hidden';

    if (oldpassword === '') {
      document.getElementsByName('oldpassword')[0].style.backgroundColor =
        'rgba(237,67,55,.5)';
      document.getElementsByName('oldpasswordmessage')[0].style.visibility =
        'visible';
    } else if (newpassword === '') {
      document.getElementsByName('newpassword')[0].style.backgroundColor =
        'rgba(237,67,55,.5)';
      document.getElementsByName('newpasswordmessage')[0].style.visibility =
        'visible';
    } else if (confirmpassword === '' || !(newpassword === confirmpassword)) {
      document.getElementsByName('confirmpassword')[0].style.backgroundColor =
        'rgba(237,67,55,.5)';
      document.getElementsByName('confirmpasswordmessage')[0].style.visibility =
        'visible';
    } else {
      //Todo call api here to reset the password
    }
  }
}
