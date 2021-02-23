import React, {Component} from "react";
import Input from "./Input.js";
import Button from "./Button.js";
import ExpenseTable from "./ExpenseTable.js";
import DeleteButton from "./DeleteButton.js";

class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
     expenses : [],
     expensesSaved: []
    }

    this.addExpense = this.addExpense.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
    this.setExpensesToLocalStorage = this.setExpensesToLocalStorage.bind(this);
    this.showExpensesSaved= this.showExpensesSaved.bind(this);

  }


  addExpense(e) {
    e.preventDefault();
    if(this.inputName.value === "" || this.inputDate.value === "" || this.inputAmount.value === "" || this.inputLocation.value === ""){
      console.log('no')
    }else{
      const exp = {
        name: this.inputName.value,
        date: this.inputDate.value,
        amount: this.inputAmount.value,
        location: this.inputLocation.value
      }
      let expenses = this.state.expenses
      expenses.unshift(exp)
      let index = -1
      for(let i = 0; i < expenses.length; i++){
        expenses[i].index = i
      }
      this.setState({
        expenses : expenses
      })
      this.setExpensesToLocalStorage()
      console.log(this.state.expenses)
    }
  this.inputName.value = "";
  this.inputDate.value = "";
  this.inputAmount.value = "";
  this.inputLocation.value = "";
  }



  deleteExpense(i) {
    const {expenses} = this.state;
    expenses.splice(i, 1);
    this.setState({expenses})
    console.log(this.state.expenses)
    this.setExpensesToLocalStorage()
  }


  setExpensesToLocalStorage() {
    const {expenses} = this.state;
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }


  showExpensesSaved() {
    const expenses = localStorage.getItem("expenses");
    const parsedExpenses = JSON.parse(expenses);
    this.setState({
      expensesSaved: parsedExpenses});
  }



  render() {
    return (
    <div style={{height: "400px"}}>
     <div className="h-75 d-flex justify-content-center">
      <div className="w-100">
        <form className="d-flex justify-content-center m-5 text-success" onSubmit={this.addExpense}>
          <Input inputRef={a => this.inputName = a} label="Name:" type="text"   placeholder="Name"/>
          <Input inputRef={a => this.inputDate = a} label="Date:" type="date" placeholder="mm/dd/yyyy" min="1997-01-01"
          max="2040-12-31"/>
          <Input inputRef={a => this.inputAmount = a} label="Amount:" type="number" placeholder="$"/>
          <Input inputRef={a => this.inputLocation = a} label="Location:" type="text" placeholder="Location"/>
          <div className="d-flex justify-content-center">
           <Button value="Add Expense"/>
          </div>
        </form>
       </div>
      </div>
     <div>
     <div>
      <table className="table d-flex justify-content-center mx-auto">
       <ExpenseTable value={this.state.expenses.map((ex, i) => {
         return (
        <tr key={i}>
          <td>{ex.i}</td>
          <td>{ex.name}</td>
          <td>{ex.date}</td>
          <td>${ex.amount}</td> 
          <td>{ex.location}</td>
          <DeleteButton onClick={this.deleteExpense.bind(this, i)}/>
        </tr>
      )})}/>
      </table>
     </div>
     <div className="d-flex justify-content-center m-5">
       <Button value="Show Old Expenses" onClick={this.showExpensesSaved}/>
     </div>
     <div>
      <table className="table d-flex justify-content-center mx-auto">
       <ExpenseTable display="d-none" value={this.state.expensesSaved.map((ex,   index) => {
       return (
        <tr key={index}>
          <td>{ex.name}</td>
          <td>{ex.date}</td>
          <td>{ex.amount}</td> 
          <td>{ex.location}</td>
          <DeleteButton onClick={this.deleteExpense}/>
        </tr>
      )})}/>
      </table>
     </div>
    </div>
   </div>
  )
 }
}


export default Form;

