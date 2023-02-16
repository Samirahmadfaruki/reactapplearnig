import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
  const expenses = [
    { title: "paper", price: 298.0, date: new Date(25, 12, 2023) },
    { title: "ink", price: 298.0, date: new Date(25, 12, 2023) },
    { title: "book", price: 298.0, date: new Date(25, 12, 2023) },
    { title: "Pen", price: 298.0, date: new Date(25, 12, 2023) },
  ];
  return (
    <div className="App">
      <h1>hello react</h1>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        price={expenses[0].price}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        price={expenses[1].price}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        price={expenses[2].price}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        price={expenses[3].price}
      ></ExpenseItem>
    </div>
  );
}

export default App;
