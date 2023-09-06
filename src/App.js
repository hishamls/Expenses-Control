import "./App.css";

import React, { useState } from "react";

import OldExpenses from "./components/Expenses/OldExpenses";
import NewExpense from "./components/Expenses/NewExpense";

let DUMMY_EXPENSES = [
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
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpenses((preExpenses) => {
      return [newExpense, ...preExpenses];
    });
  };
  // new + old expenses
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <OldExpenses items={expenses} />
    </div>
  );
}

export default App;
// ///////////////////////////////
