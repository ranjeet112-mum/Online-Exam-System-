import { Component, OnInit } from '@angular/core';
import { Addtest } from '../../addtest';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {

  filemode: boolean = true;
  test : Addtest = {
    subjectname : '',
    examdate : '',
    testduration : '',
    levelonefile : null,
    leveltwofile : null,
    levelthreefile : null,
    levelonemarks : '',
    leveltwomarks : '',
    levelthreemarks : '',
    admin : '',
  }
  constructor(private admins : AdminService) { }

  ngOnInit(): void {
    // console.log(this.admins.addTest());
    
  }

  createTest(test : Addtest){
    
    console.log(test);
    // this.admins.

    
    
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
