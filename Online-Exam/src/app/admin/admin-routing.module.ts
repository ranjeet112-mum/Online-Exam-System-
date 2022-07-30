import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddtestComponent } from './components/addtest/addtest.component';
import { AnalyzeResultsComponent } from './components/analyze-results/analyze-results.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RemovetestComponent } from './components/removetest/removetest.component';

const routes: Routes = [{
  path:'admin',
  component:AdminComponent,
  children:[
    {
      path: 'dashboard',
      component : DashboardComponent 
    },{
      path: 'addtest',
      component : AddtestComponent 
    },{
      path: 'deletetest',
      component : RemovetestComponent
    },{
      path: 'analyze',
      component : AnalyzeResultsComponent 
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
