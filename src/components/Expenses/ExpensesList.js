import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No Expenses in this Year!</h2>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
