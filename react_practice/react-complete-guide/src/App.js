import logo from "./logo.svg";
import "./App.css";
import Expense from "./component/Expense.js";
import NewExpense from "./component/NewExpense/NewExpense";
import React, { useState } from "react";

const expensesConst = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(expensesConst);

  const addExpense = (expense) => {
    console.log(expense);
    console.log(expenses);
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses]; // where to place the previous state also affect the render -> learn more about keys in react
    });
    // setExpenses([expense, ...expenses]); // expenses (with ending s is the previous state, need updating)
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
/*After learning, use Bootstrap to responsive design*/
