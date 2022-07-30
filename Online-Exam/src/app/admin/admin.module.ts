import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddtestComponent } from './components/addtest/addtest.component';
import { RemovetestComponent } from './components/removetest/removetest.component';
import { AnalyzeResultsComponent } from './components/analyze-results/analyze-results.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    AddtestComponent,
    RemovetestComponent,
    AnalyzeResultsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
