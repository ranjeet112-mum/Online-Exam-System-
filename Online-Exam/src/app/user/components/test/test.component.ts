import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { UserService } from '../../user.service';

// @ViewChild('hello', { static: false });
 


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  Tests : any[] =[];
  userId : any;
  testId :any;
  attemptId : any;
  testName : any;
  testduration: any;
  // duration : any;
  name : any;
  questions :  any[] = [];
  question : any;
  qindex: any;
  testlist : Boolean = true;
  individualtest : Boolean = false;
  starttest : Boolean = false;
  questionspage : Boolean = false;
  Resultpage : Boolean = false;
  individualTestDetails : any;
  answers : any[] = [];
  flag : Boolean = true;
  selectedAns : any;
  nextQuestion_id : any;
  atLevel = 1;
  isCleared :any;
  timer : any;
  divHello: any;
  duration : any = 10;
  interval : any;
  timeout : any;
  hh:number = 0;
  mm:number = 0;
  ss:number = 0;
  constructor( private user : UserService,private route : Router) { }

  ngOnInit(): void {
    
    if(sessionStorage.getItem('isAuthorized') != null){
      this.userId = sessionStorage.getItem('userId');
      this.name = sessionStorage.getItem('name');

    }

    this.Tests = this.user.fetchAllTestsDummy(this.userId)
    this.timer = document.getElementsByName('timer')[0] || null;
    }

    displayTest(test : any){
      this.testlist = false;
      this.individualtest = true;
      this.individualTestDetails = test;
      this.testName = test.test; 
      this.testId = test.testid; 
      this.testduration = test.duration;
    }

    startTest(test : any){
      this.individualtest = false;
      this.starttest= true;
      this.questionspage= false;
      this.Resultpage= false;
      this.testlist = false;
       
      // sessionStorage.setItem('testid',test.testid);
      // sessionStorage.setItem('test',test.test);
      // sessionStorage.setItem('duration',test.duration);
      // sessionStorage.setItem('testid',this.userId);
      console.log(`making call with user ${this.userId} with test id ${this.testId} and attempt id ${this.atLevel}`);
      
      //todo : we need to call the service(with test_id and atLevel) and get all the questions also the attempt id
      this.questions = this.user.fetchQuestionsDummy();
      this.question = this.questions[0];
      this.qindex = this.questions.indexOf(this.question) + 1;
      this.nextQuestion_id = this.questions[this.qindex].question_id;

    }

    showQuestion(){
      this.starttest = false;
      this.questionspage = true;
      console.log(this.testduration);
      
      // console.log(this.timer);
      // this.timer.innerText = "--:--"; 
      
      // this._elementRef.nativeElement.getElementById('timer').innerText = '__:__';
      // console.log(this._elementRef.nativeElement.getElementById('timer'));
      
      this.startTimer();
    }

    
    startTimer(){
      console.log("timerstarted");
      // this.timer.innerText = '00:00';
      // count 
      this.duration = Number(this.testduration); 
      if(this.duration >= 60 ) {
        for(;this.duration >= 60;){
          this.duration -= 60;
          this.hh++;
        }
      }
      this.mm = this.duration-1;
      this.ss = 60
      this.interval = setInterval(()=>{
        if(this.ss > 1 ) this.ss--;
        else {
          this.ss=60;
          // this.mm--;
          if(this.mm > 1 ) this.mm--;
          else {
            this.mm=60;
            this.hh--;
            
          } 
        }
        
        console.log(`${this.hh}:${this.mm}:${this.ss}`);
        
      },1000);

      this.timeout = setTimeout(()=>{

        this.submitTest(this.answers);
        
      },Number(this.duration) * 60 * 1000)

    }

    display(id : any ){
      // if(this.duration <= 0 ){
      // }
        this.questions.forEach(q => {if(q.question_id === id){
          this.question = q
        } });
        this.qindex = this.questions.indexOf(this.question) + 1;
        if(this.questions.length != this.qindex)
          this.nextQuestion_id = this.questions[this.qindex].question_id;
        else 
        this.nextQuestion_id = this.questions[0].question_id;
    }

    saveAnswers(qid : any, selectedAns : any){

      this.flag=true;  
      this.answers.forEach(a => {
          if(a.question_id === qid){
            a.answer = selectedAns;
              this.flag = false;
          }
        });
        if(this.flag){
          this.answers.push({question_id : qid , answer : selectedAns });
        }
      this.selectedAns = '';
      this.display(this.nextQuestion_id);
    }

    submitTest(answers : any){
      clearInterval(this.interval);
      clearTimeout(this.timeout);

      this.answers = answers;
      console.log(this.answers);
      //Todo send data from here to the back end for checking along with the attemptid
      //todo make instruction visible and set level to next level
      // this.testId = sessionStorage.getItem('testid');
      this.showResult(true);
      
      //! this wont come here
       
            
    }

    showResult(isCleared : any){
      if(this.atLevel === 3){
        alert('Your Test is over, Please proceed to the dashboard');
        this.route.navigate(['user/dashboard']);
      }
      this.isCleared = isCleared;
      this.questionspage = false;
      this.Resultpage = true;
      this.atLevel++;

    }


    Logout(){
      sessionStorage.clear();
      this.route.navigate(['/auth/login']);
    }
}
