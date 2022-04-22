import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  const x = props.items
    .filter((element) => element.date.getFullYear() == props.filterYear)
    .map((expense) => {
      return (
        <ExpenseItem
          key={expense.id} // Important note for this -> React will render list improperly without key, especially to stateful component
          expenseTitle={expense.title}
          expenseAmount={expense.amount}
          expenseDate={expense.date}
        />
      );
    });

  return x.length > 0 ? (
    x
  ) : (
    <p className="expenses-list__fallback">No value founded.</p>
  );
};

export default ExpenseList;
