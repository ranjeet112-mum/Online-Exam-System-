import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NotFoundModule } from './not-found/not-found.module';
import { AuthService } from './auth/auth.service';
import { AdminService } from './admin/admin.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    UserModule,
    AdminModule,
    NotFoundModule,
  ],
  providers: [AuthService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
