import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { Headers  } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Catagory } from '../../models/Catagory';
import 'rxjs/add/operator/map'
import { Expense } from '../../models/Expense';

@Injectable()
export class DataaccessService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private _http:HttpClient) { }

  getAllCatagories(){  
    return this._http.get("http://exptracker20180513101902.azurewebsites.net/exptracker/getallcatagories");
  }

  getAllExpenses(){
    return this._http.get("http://exptracker20180513101902.azurewebsites.net/exptracker/getallexpenses");
  }

  addExpense(expense:Expense){
    return this._http.put("http://exptracker20180513101902.azurewebsites.net/exptracker/addexpenses",JSON.stringify(expense),{headers: this.headers});
  }


}
