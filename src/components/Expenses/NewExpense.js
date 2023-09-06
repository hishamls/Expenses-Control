import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

export default function NewExpense(props) {
  const [isEditing, setShow] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), //1. To give an ID
    };

    props.onAddExpense(newExpenseData); //2. Add the new object to the array

    setShow(false); //3.
  };

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
