import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  Tests : any[] =[];
  userId : any;
  name : any;
  testlist : Boolean = true;
  individualtest : Boolean = false;
  starttest : Boolean = false;
  questionspage : Boolean = false;
  individualTestDetails : any;
  constructor(private user : UserService,private route : Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('isAuthorized') != null){
      this.userId = sessionStorage.getItem('userId');
      this.name = sessionStorage.getItem('name');

    }

    this.Tests = this.user.fetchAllTestsDummy(this.userId)

    }

    displayTest(test : any){
      this.testlist = false;
      this.individualtest = true;
      this.individualTestDetails = test;
    }

    startTest(test : any){
      this.individualtest = false;
      this.starttest= true;
      
    }


    Logout(){
      sessionStorage.clear();
      this.route.navigate(['/auth/login'])
    }
}
