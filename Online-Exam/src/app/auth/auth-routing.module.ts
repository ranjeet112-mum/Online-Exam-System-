import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { 
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },{
        path: 'register',
        component: RegisterComponent
      },{
        path: 'forgotpassword',
        component: ForgotpasswordComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
