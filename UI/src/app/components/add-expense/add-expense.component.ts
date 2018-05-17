import { Component, OnInit } from "@angular/core";
import { DataaccessService } from "../../services/data-access/data-access.service";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Expense } from "../../models/Expense";
import { Catagory } from "../../models/Catagory";
@Component({
  selector: "exp-add-expense",
  templateUrl: "./add-expense.component.html",
  styleUrls: ["./add-expense.component.css"],
  providers: [DataaccessService]
})
export class AddExpenseComponent implements OnInit {
  now = new Date();
  expDescription: string;
  model: NgbDateStruct;
  date: { year: number; month: number };
  expAmount: number;
  expCatagories: Catagory[];
  selectedCatagory:Catagory;

  constructor(private dataaccessService: DataaccessService) {}

  ngOnInit() {
    this.getAllCatagories();
  }

  addExpense() {
    let exp = new Expense();
    exp.ExpDes = this.expDescription;
    exp.ExpAmt = this.expAmount;
    exp.Expcat = this.selectedCatagory.CatId;
    exp.ExpDate = new Date(this.model.year, this.model.month-1, this.model.day+1);
    this.dataaccessService.addExpense(exp).subscribe(data => {
      alert("Expense added successfully.");
    });
  }

  getAllCatagories(){
    this.dataaccessService.getAllCatagories().subscribe(data=>{
      this.expCatagories = data as Catagory[];
    });
  }

  setCatagory(cat:Catagory){
    this.selectedCatagory =  cat;
  }

  selectToday() {
    this.model = {
      year: this.now.getFullYear(),
      month: this.now.getMonth() + 1,
      day: this.now.getDate()
    };
  }
}
