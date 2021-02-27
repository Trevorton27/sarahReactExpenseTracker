import React from 'react';
import DeleteButton from './DeleteButton';

const ExpenseTable = (props) => {
  const expenses = props.expenses;
  return (
    <div>
      <table className='table d-flex justify-content-center mx-auto'>
        <thead className='bg-success text-white'>
          <tr>
            <th>NAME</th>
            <th>DATE</th>
            <th>LOCATION</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody className='bg-light'>
          {expenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{expense.date}</td>
                <td>{expense.amount}</td>
                <td>{expense.location}</td>
                <DeleteButton
                  onClick={(e) => props.deleteExpense(expense.id)}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
