import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addtest } from './addtest';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url : string = 'hhtp://localhost:5000/api/'
  constructor(private http : HttpClient) { }

  // addTest(test : Addtest): Observable<any>{
  //   return 
  //   // return this.http.post<any>(this.url+'admin/')
  // }


}
