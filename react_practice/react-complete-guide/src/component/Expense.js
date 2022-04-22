import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";

function Expense(props) {
  const [filterYear, setFilterYear] = useState("2019");
  const changeFilter = (filterYear) => {
    setFilterYear(filterYear);
  };

  console.log(props.items);

  const x = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id} // Important note for this -> React will render list improperly without key, especially to stateful component
      expenseTitle={expense.title}
      expenseAmount={expense.amount}
      expenseDate={expense.date}
    />
  ));

  console.log(x);
  return (
    <Card className="expenses">
      <ExpensesFilter filterYear={filterYear} onFilterChange={changeFilter} />
      {x}

      {/* <ExpenseItem
        expenseTitle={props.items[0].title}
        expenseAmount={props.items[0].amount}
        expenseDate={props.items[0].date}
      ></ExpenseItem>

      <ExpenseItem
        expenseTitle={props.items[1].title}
        expenseAmount={props.items[1].amount}
        expenseDate={props.items[1].date}
      ></ExpenseItem>

      <ExpenseItem
        expenseTitle={props.items[2].title}
        expenseAmount={props.items[2].amount}
        expenseDate={props.items[2].date}
      ></ExpenseItem>

      <ExpenseItem
        expenseTitle={props.items[3].title}
        expenseAmount={props.items[3].amount}
        expenseDate={props.items[3].date}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expense;
