import { Pipe, PipeTransform } from "@angular/core";
import { Expense } from "../../models/Expense";

@Pipe({
  name: "customDate"
})
export class CustomDatePipe implements PipeTransform {
  transform(value: Expense[], args?: any,args1?: any,args2?: any): any {
    if (value) {
      let d: Expense[];
      d = value.filter(item => {
        if (args && args1) 
          return new Date(item.ExpDate).getMonth() + 1 === args &&   new Date(item.ExpDate).getFullYear() === args1 && (args2 === 0? true: item.Expcat === args2);
        else 
          return true;
      });
      return d;
    } else return value;
  }
}
