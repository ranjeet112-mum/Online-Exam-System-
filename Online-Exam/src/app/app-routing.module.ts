import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { 
    path: '', redirectTo : 'landingpage', pathMatch:'full' 
  },{
    path: 'landingpage', component : LandingpageComponent
  }
  // ,  {
    // path:'**', component  : NotfoundComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
