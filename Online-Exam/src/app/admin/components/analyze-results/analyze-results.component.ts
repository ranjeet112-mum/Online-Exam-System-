import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-analyze-results',
  templateUrl: './analyze-results.component.html',
  styleUrls: ['./analyze-results.component.css']
})
export class AnalyzeResultsComponent implements OnInit {
  name : any;
  adminid: any;
  students : any[]=[];
  testlist : any[] =[];
  testId : number = 0;
  level : number = 0;
  cutoff : number = 0;
  qualifications : string = "";
  city : string = "";
  constructor(private cookie : CookieService,private route : Router,private admins : AdminService) {
    this.admins.fetchTestList().subscribe(data => {
      this.testlist = data;
      // console.log(this.testlist);
      
    }, err => {
      console.log(err);
      
    })
   }
  

  ngOnInit(): void {
    if(this.cookie.check('isAuthorized')){
      this.adminid = this.cookie.get('userId');
      this.name = this.cookie.get('name');
    }
  }

  search(){
    console.log(this.testId);
    console.log(this.level);
    console.log(this.cutoff);
    console.log(this.qualifications);
    console.log(this.city);

    this.admins.getAnalysis(this.testId,this.level,this.cutoff,this.qualifications,this.city)
    .subscribe(data => {console.log(data);
      this.students = data;
    },err => console.log(err)
    
    );

    
  }

  Logout(){
    this.cookie.deleteAll();

    // this.cookie.delete('isAuthorized');
    // this.cookie.delete('name');
    // this.cookie.delete('userId');
    // alert(this.cookie.check('isAuthorized'));
    this.route.navigate(['/auth/login']);
  }
}
