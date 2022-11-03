import React from 'react';
import '../Base.css';
import './Form.css';

function Form() {
  return (
    <div>
      <form action='handleCalc'>
        <div className='inputContainer'>
          <label htmlFor='debtAmount' className='inputLabel'>
            $
          </label>
          <input className='formInput' type='number' placeholder='Debt Amount' />
        </div>
        <div className='inputContainer'>
          <label htmlFor='interestRate' className='inputLabel'>
            %
          </label>
          <input className='formInput' type='number' placeholder='Interest Rate' />
        </div>
        <button className='btn formBtn'>Calculate</button>
      </form>
    </div>
  );
}

export default Form;
