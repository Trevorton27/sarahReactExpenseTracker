import React, {Component} from "react";
import Form from "./Form.js";


class ExpenseTracker extends Component {
  render() {
    return (
      <div>
        <div className="bg-success">
         <h1 className="display-4 d-flex justify-content-center pt-4 pb-4 text-white">Expense Tracker</h1>
        </div>
        <Form/>
      </div> 
    );
  }
}

export default ExpenseTracker;