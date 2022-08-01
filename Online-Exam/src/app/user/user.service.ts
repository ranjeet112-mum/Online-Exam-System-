import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, catchError,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url : string = 'http://localhost:5000/api'

  constructor(private http: HttpClient) { }

  fetchAllTests(userId : any):Observable<any[]> {
    return this.http.get<any>(this.url+`somrthing?userId=${userId}`)
    .pipe(catchError(this.ErrorHandler));
  }

  fetchAllTestsDummy(userId : any) {
    return [{
      testid : 1,
      test : "hello world",
      duration : 30,
      l_one_req : 20,
      l_two_req : 20,
      l_three_req : 20,
    },{
      testid : 2,
      test : "Bonjour",
      duration : 30,
      l_one_req : 20,
      l_two_req : 20,
      l_three_req : 20,
    },{
      testid : 3,
      test : "Namaste",
      duration : 30,
      l_one_req : 20,
      l_two_req : 20,
      l_three_req : 20,
    },{
      testid : 4,
      test : "Hola",
      duration : 30,
      l_one_req : 20,
      l_two_req : 20,
      l_three_req : 20,
    }
  ]
  }

  fetchQuestions(test_id:any , level:any) :Observable<any[]>{
    return this.http.get<any>(this.url+"something")
    .pipe(catchError(this.ErrorHandler));
  }

  fetchQuestionsDummy() {
    return [{
        question_id : 1,
        question : "question 1",
        optionsone : "one",
        optionstwo : "two",
        optionsthree : "three",
        optionsfour : "four",

    },{
      question_id : 2,
      question : "question 2",
      optionsone : "2one",
      optionstwo : "2two",
      optionsthree : "2three",
      optionsfour : "2four",

  },{
    question_id : 3,
    question : "question 3",
    optionsone : "3one",
    optionstwo : "3two",
    optionsthree : "3three",
    optionsfour : "3four",

},{
  question_id : 4,
  question : "question 4",
  optionsone : "4one",
  optionstwo : "4two",
  optionsthree : "4three",
  optionsfour : "4four",

}
  ]
  }

  // *this is to verify the answers
  sendAnswers(anslist : any) :Observable<any[]>{
    return this.http.post<any>(this.url+"something",anslist);
  }



  // *this is for the analysis
  fetchMyAttemptList(userId : any) : Observable<any[]> {
    return this.http.get<any>(this.url+"something")
    .pipe(catchError(this.ErrorHandler));
  }
  ErrorHandler(error : HttpErrorResponse){
    return throwError(error || "Internal server Error!")
  }

}
