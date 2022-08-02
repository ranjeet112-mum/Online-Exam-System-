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
    
    if(sessionStorage.getItem('isAuthorized') != null){
      this.adminid = sessionStorage.getItem('userId');
      this.name = sessionStorage.getItem('name');
    }
    
    this.admins.fetchTestList().subscribe(data => {
      this.testlist = data;
      // console.log(this.testlist);
      
    }, err => {
      alert("there was an error while fetching the data please try later.");
      this.route.navigate(['/admin/dashboard']);
      // console.log(err);
      
    })

    this.admins.getAllAnalysis(this.adminid)
    .subscribe(data => this.students = data, err => {alert("error fetch analysis"); console.log(err);
    })

   }
  

  ngOnInit(): void {
    // if(this.cookie.check('isAuthorized')){
    //   this.adminid = this.cookie.get('userId');
    //   this.name = this.cookie.get('name');
    // }
    
  }

  search(){
    // console.log(this.testId);
    // console.log(this.level);
    // console.log(this.cutoff);
    // console.log(this.qualifications);
    // console.log(this.city);

    this.admins.getAnalysis(this.testId,this.level,this.cutoff,this.qualifications,this.city)
    .subscribe(data => {
        // console.log(data);
      this.students = data;
      // console.log(data);
      
      // alert(`Fetched ${this.students.length} from your search`);
    },err => {
      // console.log(err)
      alert("Error while fetching the record.");
      // this.route.navigate(['/admin/dashboard']);
    }
    
    );

    
  }

  displayCards(student : any) {
    // console.log(student);
    
    
    alert(`
    student is here
    Name :            ${student.name}
    gender  :         ${student.gender}
    Birthday :        ${student.dateOfBirth}
    email :            ${student.email}
    phone :           ${student.phone}
    city  :            ${student.city}
    College :         ${student.college}
    qualifications : ${student.qualification}
    Passing Year   :  ${student.yearOfPassing}
    Test :                ${student.subjectName}
    level cleared :   ${student.levelCleared}
    L1 marks :        ${student.lOneMarks || 0}
    L2 marks :        ${student.ltwoMarks || 0} 
    L3 marks :        ${student.lthreeMarks || 0}  
    `)
  }


  Logout(){
    // this.cookie.deleteAll();
    sessionStorage.clear();

    // this.cookie.delete('isAuthorized');
    // this.cookie.delete('name');
    // this.cookie.delete('userId');
    // alert(this.cookie.check('isAuthorized'));
    this.route.navigate(['/auth/login']);
  }
}
