import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Register } from '../../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = {
    name: '',
    dob: '',
    gender: 'male',
    email: '',
    phone: '',
    qualifications: '',
    collegename: '',
    yearofpassing: '',
    city: '',
  };
  name: any;
  dob: any;
  gender: any;
  email: any;
  phone: any;
  qualifications: any;
  collegename: any;
  yearofpassing: any;
  city: any;
  namemessage: any;
  dobmessage: any;
  gendermessage: any;
  emailmessage: any;
  phonemessage: any;
  qualificationsmessage: any;
  collegenamemessage: any;
  yearofpassingmessage: any;
  citymessage: any;
  red: string = 'rgba(237,67,55,.5)';
  white: string = 'rgba(255,255,255,1)';

  constructor(private auth: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.name = this.getElement('Name').style;
    this.dob = this.getElement('dob').style;
    this.gender = this.getElement('gender').style;
    this.email = this.getElement('email').style;
    this.phone = this.getElement('phoneno').style;
    this.qualifications = this.getElement('qualifications').style;
    this.collegename = this.getElement('collegename').style;
    this.yearofpassing = this.getElement('yearofpassing').style;
    this.city = this.getElement('city').style;
    this.namemessage = this.getElement('namemessage').style;
    this.dobmessage = this.getElement('dobmessage').style;
    this.gendermessage = this.getElement('gendermessage').style;
    this.emailmessage = this.getElement('emailmessage').style;
    this.phonemessage = this.getElement('phonenomessage').style;
    this.qualificationsmessage = this.getElement('qualificationsmessage').style;
    this.collegenamemessage = this.getElement('collegemessage').style;
    this.yearofpassingmessage = this.getElement('yearofpassingmessage').style;
    this.citymessage = this.getElement('citymessage').style;
  }

  getElement(name: string): HTMLElement {
    return document.getElementsByName(name)[0];
  }

  Register(register: Register) {
    this.name.backgroundColor = this.white;
    this.dob.backgroundColor = this.white;
    this.gender.backgroundColor = this.white;
    this.email.backgroundColor = this.white;
    this.phone.backgroundColor = this.white;
    this.qualifications.backgroundColor = this.white;
    this.collegename.backgroundColor = this.white;
    this.yearofpassing.backgroundColor = this.white;
    this.city.backgroundColor = this.white;

    register.phone = register.phone.toString();

    if (register.name === '') {
      this.name.backgroundColor = this.red;
      this.namemessage.visibility = 'visible';
    } else if (register.dob === '') {
      this.dob.backgroundColor = this.red;
      this.dobmessage.visibility = 'visible';
    } else if (register.gender === '') {
      this.gender.backgroundColor = this.red;
      this.gendermessage.visibility = 'visible';
    } else if (
      !(register.email.includes('@') && register.email.includes('.')) ||
      register.email === ''
    ) {
      this.email.backgroundColor = this.red;
      this.emailmessage.visibility = 'visible';
    } else if (register.phone === '' || register.phone.length != 10) {
      console.log(register.phone.length);
      console.log(typeof register.phone);

      this.phone.backgroundColor = this.red;
      this.phonemessage.visibility = 'visible';
    } else if (register.qualifications === '') {
      this.qualifications.backgroundColor = this.red;
      this.qualificationsmessage.visibility = 'visible';
    } else if (register.collegename === '') {
      this.collegename.backgroundColor = this.red;
      this.collegenamemessage.visibility = 'visible';
    } else if (register.yearofpassing === '') {
      this.yearofpassing.backgroundColor = this.red;
      this.yearofpassingmessage.visibility = 'visible';
    } else if (register.city === '') {
      this.city.backgroundColor = this.red;
      this.citymessage.visibility = 'visible';
    } else {
      this.register = register;

      // Todo : call api here
      console.log('register');
      console.log(register);
    }
  }
}
