import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url : string = 'http://localhost:xxxxx/';
  constructor() { }

  check(login : Login ) : Boolean{
/* 
Todo: 1 work on the Api call
Todo: 2 work on the register frontend and component class logic (also create an interface to work)
Todo: 3 work on the password frontend and component class
*/
    console.log("inside service");
    
    return (login.username === 'hello' && login.password === 'world'); 
  } 

}
