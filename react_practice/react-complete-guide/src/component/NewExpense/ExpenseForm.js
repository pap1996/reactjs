import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Many state slice -> one state instead
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  // the parameter of useState() -> the data we want to keep track of
  // - instead of slice of state, we pass an object
  // - this leads to that the function to update state must update the entire object
  // -- the use of spread operator come into effect `...`
  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };
  */

  // Recommend: multiple slice
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isOpenForm, setOpenForm] = useState(true);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // when click the button, auto reload the page, we need to turn off the feature

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    // console.log(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  const openFormHandler = (event) => {
    event.preventDefault();
    setOpenForm(!isOpenForm);
  };
  const newExpense = (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={openFormHandler}>Cancel</button>
      </div>
    </form>
  );

  const buttonExpense = (
    <div className="new-expense__actions">
      <button onClick={openFormHandler}>Add New Expense</button>
    </div>
  );
  return isOpenForm ? buttonExpense : newExpense; // this is also the way, one other way is combine boolean and jsx (like the solution of the course)
};

export default ExpenseForm;
