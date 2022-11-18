import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  const saveExpenseDateHandler = (enteredExpenseDate) => {
    const expenseDate = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    console.log(expenseDate);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onsaveExpenseDate={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
