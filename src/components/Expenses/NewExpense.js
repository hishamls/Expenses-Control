import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShow(false);
  };
  const [isEditing, setShow] = useState(false);

  const startEditingHandler = () => {
    setShow(true);
  };
  const stopEditingHandler = () => {
    setShow(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button className="alternative" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
