import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class AuthModule { }
