import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Login } from './login';
import { ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url : string = 'http://localhost:5000/api/';

  constructor(private http : HttpClient) { }
  // constructor() { }

  Authenticate(login : Login ) : Observable<any>{
    
    return this.http.post<any>(this.url+'user/userlogin',login)
    .pipe(catchError(this.ErrorHandler)); 
  } 

  ErrorHandler(error: HttpErrorResponse){
    return throwError(error || 'Internal Server Error!')
  }

  Exists(username : string) {

  }

  Register(register :Register){
    return this.http.post<Register>(this.url+'user/adduser',register)
    .pipe(catchError(this.ErrorHandler));
  }

  forgetPassword(email : string) : Observable<any>{
    return this.http.get<any>(this.url + `user/resetpassword/${email}`)
    .pipe(catchError(this.ErrorHandler));
  } 

}
