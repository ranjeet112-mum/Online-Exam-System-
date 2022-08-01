import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestComponent } from './components/test/test.component';
import { UserComponent } from './user.component';
import { AnalyzeResultsComponent } from './components/analyze-results/analyze-results.component';

const routes: Routes = [
  {
    path:'user', 
    component:UserComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,

      },{
        path: 'test',
        component: TestComponent,

      },{
        path: 'analyze',
        component: AnalyzeResultsComponent,

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
