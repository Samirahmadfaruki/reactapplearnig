import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expenseItem">
      <div className="expenseItemDescription">
        <ExpenseDate date={props.date}></ExpenseDate>
        <h2>{props.title}</h2>
      </div>
      <div className="expenseItemPrice">
        <h2>{props.price}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
