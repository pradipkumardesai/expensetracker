import { Component, OnInit } from "@angular/core";
import { DataaccessService } from "../../services/data-access/data-access.service";
import { Catagory } from "../../models/Catagory";
import { Expense } from "../../models/Expense";
import { CatCurrBal } from "../../models/CatCurrBal";

@Component({
  selector: "exp-all-catagories",
  templateUrl: "./all-catagories.component.html",
  styleUrls: ["./all-catagories.component.css"]
})
export class AllCatagoriesComponent implements OnInit {

  catagories: Catagory[];
  allExpenses: Expense[];
  catCurrBal = new Object();

  constructor(private dataaccessService: DataaccessService) {

    this.dataaccessService.getAllCatagories().subscribe(data => {
      this.catagories = data as Catagory[];
      this.dataaccessService.getAllExpenses().subscribe(data => {
        this.allExpenses = data as Expense[];
        this.allExpenses.forEach(item => {
          if (this.catCurrBal[item.Expcat]) {
            this.catCurrBal[item.Expcat] = this.catCurrBal[item.Expcat] + item.ExpAmt;
          } else {
            this.catCurrBal[item.Expcat] = item.ExpAmt;
          }
        });
      });
    });
  }

 

  ngOnInit() {
   
  }

  getCurrentMonthBalanceForCat(
    catId: number,
    month: number,
    year: number
  ): number {
    let currBalForCat = 0;
  
    return currBalForCat;
  }
}
