import React from 'react';
import input from './Input.js';
import Button from './Button.js';
// import './style.css';

const Form = (props) => {
  const inputStyle = {
    maxHeight: '3.5em'
  };
  return (
    <div style={{ height: '300px', marginTop: '10em' }}>
      <div className='h-75 d-flex justify-content-center'>
        <div className='w-100'>
          <form
            className='form d-flex justify-content-center m-5 text-success'
            onSubmit={props.addExpense}
          >
            <input
              style={inputStyle}
              className='formInput'
              label='Name:'
              type='text'
              placeholder='Name'
              name='nameInput'
              value={props.nameInput}
              onChange={props.handleChange}
              required
            />
            <input
              style={inputStyle}
              label='Date:'
              type='date'
              placeholder='mm/dd/yyyy'
              min='1997-01-01'
              max='2040-12-31'
              name='dateInput'
              value={props.dateInput}
              onChange={props.handleChange}
              required
            />
            <input
              style={inputStyle}
              label='Amount:'
              type='number'
              placeholder='$'
              name='amountInput'
              value={props.amountInput}
              onChange={props.handleChange}
              required
            />
            <input
              style={inputStyle}
              label='Location:'
              type='text'
              placeholder='Location'
              name='locationInput'
              value={props.locationInput}
              onChange={props.handleChange}
              required
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
