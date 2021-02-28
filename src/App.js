import React, { Component } from 'react';
import ExpenseTable from './ExpenseTable.js';
import Form from './Form.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
      expensesSaved: [],
      nameInput: '',
      dateInput: '',
      amountInput: '',
      locationInput: ''
    };

    this.addExpense = this.addExpense.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses'));
    savedExpenses
      ? this.setState({ expenses: savedExpenses })
      : this.setState({ expenses: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.expenses !== prevState.expenses.length) {
      localStorage.setItem('expenses', JSON.stringify(this.state.expenses));
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log('value: ', value);
    console.log('name: ', name);
    this.setState({ [name]: value });
  };

  addExpense = (e) => {
    e.preventDefault();

    const newExpenseItem = {
      id: Math.random(),
      name: this.state.nameInput,
      date: this.state.dateInput,
      amount: this.state.amountInput,
      location: this.state.locationInput
    };
    this.setState({
      expenses: [...this.state.expenses, newExpenseItem],
      nameInput: '',
      dateInput: '',
      amountInput: '',
      locationInput: ''
    });
  };

  deleteExpense(expenseId) {
    const expensesMinusDeletedRow = this.state.expenses.filter(
      (expense) => expense.id !== expenseId
    );

    this.setState({
      expenses: expensesMinusDeletedRow
    });
  }

  render() {
    return (
      <div>
        <div className='bg-success'>
          <h1 className='display-4 d-flex justify-content-center pt-4 pb-4 text-white'>
            Expense Tracker
          </h1>
        </div>
        <Form
          addExpense={this.addExpense}
          handleChange={this.handleChange}
          nameInput={this.state.nameInput}
          locationInput={this.state.locationInput}
          dateInput={this.state.dateInput}
          amountInput={this.state.amountInput}
        />
        <ExpenseTable
          expenses={this.state.expenses}
          deleteExpense={this.deleteExpense}
        />
      </div>
    );
  }
}

export default App;
