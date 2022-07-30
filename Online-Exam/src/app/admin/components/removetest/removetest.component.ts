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
      console.log(err);
      
    })
   }
  
  ngOnInit(): void {
    if(this.cookie.check('isAuthorized')){
      this.adminid = this.cookie.get('userId');
      this.name = this.cookie.get('name');
    }
  }

  deletee(testId : Number){
    this.admins.deleteTest(testId)
    .subscribe(data => {console.log(data);
    
    },err => {console.log(err);
      
      this.route.navigate(['/admin/dashboard']);
    });
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
