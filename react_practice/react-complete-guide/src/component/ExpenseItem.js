// a component - function on JS
// toLocaleString(locale, options), options is a object,
// in which keys is element of date (timezone, month, weekday)
// and value indicate the format of the element (short/ long, etc.)

import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [expenseTitle, changeTitle] = useState(props.expenseTitle);

  const clickHandler = () => {
    changeTitle("Updated");
    console.log(expenseTitle);
  };

  console.log(expenseTitle);

  return (
    <div className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${props.expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
