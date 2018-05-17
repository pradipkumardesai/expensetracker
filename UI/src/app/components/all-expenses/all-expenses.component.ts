import { Component, OnInit } from "@angular/core";

import { DataaccessService } from "../../services/data-access/data-access.service";
import { Expense } from "../../models/Expense";
import { MonthYearLookup } from "../../models/MonthYear";
import { Catagory } from "../../models/Catagory";

@Component({
  selector: "exp-all-expenses",
  templateUrl: "./all-expenses.component.html",
  styleUrls: ["./all-expenses.component.css"]
})
export class AllExpensesComponent implements OnInit {
  expenses: Expense[];
  selectedMonth = { id: 5, value: "May" };
  selectedYear = 2018;
  selectedcat: Catagory; 
  monthLookup = MonthYearLookup.Months;
  yearLookUp = MonthYearLookup.years;
  allCatagories: Catagory[];

  constructor(private dataAccessService: DataaccessService) {
    this.selectedcat = new Catagory();
    this.selectedcat.CatId = 0;
    this.selectedcat.CatDes = "--Show all--";
  }

  ngOnInit() {
    this.getAllCatagories();
    this.dataAccessService.getAllExpenses().subscribe(data => {
      this.expenses = data as Expense[];
    });
  }

  setMonth(month) {
    this.selectedMonth = month;
  }

  setYear(year) {
    this.selectedYear = year;
  }

  setCat(cat) {
    this.selectedcat = cat;
  }

  getAllCatagories() {
    this.dataAccessService.getAllCatagories().subscribe(data => {
      this.allCatagories = data as Catagory[];
      this.allCatagories.push(this.selectedcat);
    });
  }
}
