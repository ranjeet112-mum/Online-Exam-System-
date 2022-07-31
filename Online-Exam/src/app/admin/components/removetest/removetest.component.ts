import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-removetest',
  templateUrl: './removetest.component.html',
  styleUrls: ['./removetest.component.css']
})
export class RemovetestComponent implements OnInit {
  name : any;
  adminid: any;
  testId : Number =0;
  testlist : any[] =[];
  //import { CookieService } from 'ngx-cookie-service';
  constructor(private cookie : CookieService,private route : Router,private admins : AdminService) {
    this.admins.fetchTestList().subscribe(data => {
      this.testlist = data;
      // console.log(this.testlist);
      
    }, err => {
      alert("there was an error while fetching the data please try later.");
      this.route.navigate(['/admin/dashboard']);
      
      
    })
   }
  
  ngOnInit(): void {
    if(sessionStorage.getItem('isAuthorized') != null){
      this.adminid = sessionStorage.getItem('userId');
      this.name = sessionStorage.getItem('name');
    }
  }

  deletee(testId : Number){
    this.admins.deleteTest(testId)
    .subscribe(data => {
      // console.log(data);
      alert("Test successfully delete");      
      this.route.navigate(['/admin/dashboard']);
    
    },err => {
      // console.log(err);
      alert("Test successfully delete");      
      this.route.navigate(['/admin/dashboard']);
    });
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
