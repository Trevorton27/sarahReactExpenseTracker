import React from 'react';
import input from './Input.js';
import Button from './Button.js';

const Form = (props) => {
  return (
    <div style={{ height: '400px' }}>
      <div className='h-75 d-flex justify-content-center'>
        <div className='w-100'>
          <form
            className='d-flex justify-content-center m-5 text-success'
            onSubmit={props.addExpense}
          >
            <input
              label='Name:'
              type='text'
              placeholder='Name'
              name='name'
              value={props.name}
              onChange={props.handleChange}
            />
            <input
              label='Date:'
              type='date'
              placeholder='mm/dd/yyyy'
              min='1997-01-01'
              max='2040-12-31'
              name='date'
              value={props.date}
              onChange={props.handleChange}
            />
            <input
              label='Amount:'
              type='number'
              placeholder='$'
              name='amount'
              value={props.amount}
              onChange={props.handleChange}
            />
            <input
              label='Location:'
              type='text'
              placeholder='Location'
              name='location'
              value={props.location}
              onChange={props.handleChange}
            />
            <div className='d-flex justify-content-center'>
              <Button value='Add Expense' />
            </div>
          </form>
        </div>
      </div>
      <div>
        <div>
          <table className='table d-flex justify-content-center mx-auto'></table>
        </div>
      </div>
    </div>
  );
};

export default Form;
