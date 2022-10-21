import React, {UseState} from "react";
import "./Expenses.css";
import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
function Expenses(props) {
  return (
    <Card className="expenses">
      {
        props.item.map(
          expense=> (
            <ExpenseItem
              date={expense.date}
              title={expense.title}
               price={expense.price}
          />
          )
        )
      }
      
    </Card>
  );
}
export default Expenses;
