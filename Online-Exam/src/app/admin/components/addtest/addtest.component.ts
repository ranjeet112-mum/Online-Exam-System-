import { Component, OnInit } from '@angular/core';
import { Addtest } from '../../addtest';
import { AdminService } from '../../admin.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Addquestion } from '../../addquestion';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {

  filemode: boolean = true;
  test : Addtest = {
    subjectname : '',
    testdate : '',
    duration : 0,
    // levelonefile : null,
    // leveltwofile : null,
    // levelthreefile : null,
    lonereq : 0,
    ltworeq : 0,
    lthreereq : 0,
    adminid : 0,
  }

  question : Addquestion = {
    testid : 0,
    levelid : 0,
    question1 : '',
    optionsone : '',
    optionstwo : '',
    optionsthree : '',
    optionsfour : '',
    optionscorrect : '',
  }

  testlist : any[] = [];
  // constructor(private admins : AdminService) { }
  name : any;
  adminid: any;
  constructor(private cookie : CookieService,private route : Router,private admins : AdminService) { 
    this.admins.fetchTestList().subscribe(data => {
      this.testlist = data;
      // console.log(this.testlist);
      
    }, err => {
      // console.log(err);
      alert("there was an error while fetching the data please try later.");
      this.route.navigate(['/admin/dashboard']);
      
    })
  }
  
  ngOnInit(): void {
    // if(this.cookie.check('isAuthorized')){
    //   this.adminid = this.cookie.get('userId');
    //   this.name = this.cookie.get('name');
    // }
    if(sessionStorage.getItem('isAuthorized') != null){
      this.adminid = sessionStorage.getItem('userId');
      this.name = sessionStorage.getItem('name');
    }

  }

  createTest(test : Addtest){
    // console.log("calling the api");
    
    this.test = test;
    this.test.adminid = Number(this.adminid); 
    this.admins.addTest(this.test)
    .subscribe(data => {
      // console.log(data);
      alert("successfully creating");
      this.route.navigate(['/admin/dashboard']);
    },err => {
      console.log(err);
      
      alert(err.error+ " Keep the name short");
      // this.route.navigate(['/admin/dashboard']);

    });
  }

  addQ(question : Addquestion){
    // console.log(this.question);
    this.question.levelid = Number(this.question.levelid); 
    
    this.question = question;
    this.question.testid = Number(this.question.testid);
    this.admins.addQuestion(this.question).subscribe(data => {
      alert("successfully saved question");
      this.route.navigate(['/admin/dashboard']);
    },err => {
      console.log(err);
      
      alert("somthing went wrong while adding the Question :/");
      this.route.navigate(['/admin/dashboard']);

      // console.log(err);
      
    })
    
  }

  Logout(){
    // this.cookie.deleteAll();
    sessionStorage.clear();
    // this.cookie.delete('name');
    // this.cookie.delete('userId');
    // alert(this.cookie.check('isAuthorized'));
    this.route.navigate(['/auth/login']);
  }

  filemodeon(){ 
    this.filemode = true; 
    if(!(document.getElementsByName("filemodeon")[0].classList.contains('selected'))){
    document.getElementsByName("filemodeon")[0].classList.add('selected');
  }
    document.getElementsByName("filemodeoff")[0].classList.remove('selected');

  }
  filemodeoff(){ 
    this.filemode = false; 
    document.getElementsByName("filemodeon")[0].classList.remove('selected');
    document.getElementsByName("filemodeoff")[0].classList.add('selected');
  }


}
