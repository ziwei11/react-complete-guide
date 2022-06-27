import "./ExpenseItem.css";
import Card from "../UI/Card";
import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.67;
  //   const month = props.date.toLocaleString("en-US", { month: "long" });
  //   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //   const year = props.date.getFullYear();
  // document.getElementById("root").addEventListener();

  // const [title, setTitle] = useState(props.title);
  // console.log("ExpenseItem evaluated by React");

  // let title = props.title;

  // const clickHandler = () => {
  //   // console.log("Clicked!!!!");
  //   //title = "Updated!";
  //   setTitle("Updated!");
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
  //   <h2>Expense Item!</h2>;
};

export default ExpenseItem;
