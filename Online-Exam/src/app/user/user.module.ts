import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './user.component';
// import { AddtestComponent } from './components/addtest/addtest.component';
// import { RemovetestComponent } from './components/removetest/removetest.component';
import { AnalyzeResultsComponent } from './components/analyze-results/analyze-results.component';
import { TestComponent } from './components/test/test.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    // AddtestComponent,
    // RemovetestComponent,
    AnalyzeResultsComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
