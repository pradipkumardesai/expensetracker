import { Routes } from "@angular/router";
import { AddExpenseComponent } from "./components/add-expense/add-expense.component";
import { AllCatagoriesComponent } from "./components/all-catagories/all-catagories.component";
import { AllExpensesComponent } from "./components/all-expenses/all-expenses.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "catagories" },
  { path: "catagories", component: AllCatagoriesComponent },
  { path: "expenses", component:AllExpensesComponent},
  { path: "addexpense", component:AddExpenseComponent}
];
