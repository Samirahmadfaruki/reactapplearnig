import  { useState } from 'react'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // let title = props.title
  const [title, setTitle]= useState(props.title)
  const clickHandler = ()=>{
    setTitle("Updated")
    // title="updated"
    console.log(title);
  }
  return (
    <Card className="expenseItem">
      <ExpenseDate date={props.date} />
      <div className="expenseItemDescription">
        <h2>{title}</h2>
        <div className="expenseItemamount">₹{props.amount}</div>
      </div>
      <button onClick={clickHandler}>on click</button>
    </Card>
  );
}

export default ExpenseItem;
