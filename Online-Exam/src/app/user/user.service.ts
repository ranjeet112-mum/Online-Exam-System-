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

  sendAnswers(anslist : any) :Observable<any[]>{
    return this.http.post<any>(this.url+"something",anslist);
  }


  fetchMyAttemptList(userId : any) : Observable<any[]> {
    return this.http.get<any>(this.url+"something")
    .pipe(catchError(this.ErrorHandler));
  }
  ErrorHandler(error : HttpErrorResponse){
    return throwError(error || "Internal server Error!")
  }

}
