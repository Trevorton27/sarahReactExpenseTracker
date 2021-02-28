import React from 'react';
import DeleteButton from './DeleteButton';

const ExpenseTable = (props) => {
  const expenses = props.expenses;
  return (
    <div>
      <table
        className='table justify-content-center mx-auto'
        style={{ width: '520px', textAlign: 'center' }}
      >
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
                <td
                  style={{
                    backgroundColor: '#fff',
                    marginTop: '5px',
                    border: 'none'
                  }}
                >
                  <DeleteButton
                    onClick={(e) => props.deleteExpense(expense.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
