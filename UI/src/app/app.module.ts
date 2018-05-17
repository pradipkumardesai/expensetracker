import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { DataaccessService } from './services/data-access/data-access.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { routes } from './app.route';
import { AllCatagoriesComponent } from './components/all-catagories/all-catagories.component';
import { AllExpensesComponent } from './components/all-expenses/all-expenses.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomDatePipe } from './pipes/custom-date/custom-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    AllCatagoriesComponent,
    AllExpensesComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [DataaccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
