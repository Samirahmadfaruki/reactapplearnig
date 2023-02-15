import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 12, 2);
  const expenseItem = "Car Insurance";
  const expensePrice = 400;
  return (
    <div className="expenseItem">
      <div> {expenseDate.toISOString()}</div>
      <div className="expenseItemDescription">
        <h2>{expenseItem}</h2>
      </div>
      <div className="expenseItemPrice">
        <h2>{expensePrice}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
