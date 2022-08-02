import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-analyze-results',
  templateUrl: './analyze-results.component.html',
  styleUrls: ['./analyze-results.component.css']
})
export class AnalyzeResultsComponent implements OnInit {

  userId : any;
  name : any; 
  Tests : any[] = [];

  constructor(private router : Router,private user : UserService) { 
  
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('isAuthorized') != null){
      this.userId = sessionStorage.getItem('userId');
      this.name = sessionStorage.getItem('name');
    }
    // Todo  fetch the list of past data from here!
  this.user.fetchMyAttemptList(this.userId).subscribe(data => {
    this.Tests = data;
    console.log(this.Tests);
    
  },err => {alert("error in user analyze component");
  console.log(err);
  
}
  );  }
  
  Logout(){
    sessionStorage.clear();

    // this.cookie.deleteAll();
    // this.cookie.delete('name');
    // this.cookie.delete('userId');
    // alert(this.cookie.check('isAuthorized'));
    this.router.navigate(['/auth/login']);
  }


}
