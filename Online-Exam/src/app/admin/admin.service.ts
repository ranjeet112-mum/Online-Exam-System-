import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Addquestion } from './addquestion';
import { Addtest } from './addtest';
// import { ErrorHandler } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url : string = 'http://localhost:5000/api/'
  constructor(private http : HttpClient) { }

  addTest(test : Addtest): Observable<any>{
    console.log("in the service");
    // test.adminid = 1;
    return this.http.post<any>(this.url+'test/addtest',test)
    .pipe(catchError(this.ErrorHandler));
    
    // .pipe()
    // return this.http.post<any>(this.url+'admin/')
  }

  addQuestion(question : Addquestion) : Observable<any>{

    console.log(question);
    // question.testid = `${question.testid}`;
    return this.http.post<any>(this.url+'questions/addquestion',question)
    .pipe(catchError(this.ErrorHandler));
    // return this.http.post<any>(this.url+'questions/addquestion', question);
  }
  ErrorHandler(error: HttpErrorResponse){
    return throwError(error || 'Internal Server Error!')
  }

  fetchTestList() : Observable<any> {
    return this.http.get<any>(this.url + 'test/gettestlist')
    .pipe(catchError(this.ErrorHandler)); 
  }
  
  deleteTest(testid : Number) : Observable<any>{
    return this.http.delete<any>(this.url + `test/deletetest/${testid}`)
    .pipe(catchError(this.ErrorHandler))
  }

  getAnalysis(test_id : number,level:number,marks:number,qualification:string,city:string) : Observable<any>{
    return this.http.get<any>(this.url+`admin/getanalysis?test_id=${test_id}&level=${level}&marks=${marks}&qualification=${qualification}&city=${city}`)
    .pipe(catchError(this.ErrorHandler));
  }

  getAllAnalysis(admin_id : any) : Observable<any[]> {
      return this.http.get<any>(this.url+`admin/getallanalysis?admin_id=${admin_id}`)
      .pipe(catchError(this.ErrorHandler));
  }
}
