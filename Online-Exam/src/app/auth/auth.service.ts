import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Login } from './login';
import { ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url : string = 'http://localhost:5000/';

  constructor(private http : HttpClient) { }
  // constructor() { }

  Authenticate(login : Login ) : Observable<any>{
    
    return this.http.post<any>(this.url+'api/user/userlogin',login)
    .pipe(catchError(this.ErrorHandler)); 
  } 

  ErrorHandler(error: HttpErrorResponse){
    return throwError(error || 'Internal Server Error!')
  }

  Exists(username : string) {

  }

}
