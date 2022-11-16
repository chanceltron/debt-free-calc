import React, { useState } from 'react';

import '../Base.css';
import './Form.css';

const Form = (props) => {
  const [debtPrincipal, setDebtPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');

  const typeNumberHandler = () => {
    debtPrincipal.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const interestRateCalc = interestRate / Math.pow(10, 2);
    const interest = interestRateCalc * debtPrincipal;
    const debtTotal = Number(interest) + Number(debtPrincipal);
    props.setDebtTotal(debtTotal);

    const dividedNum = debtTotal / 12;
    const monthlyPayment = dividedNum.toFixed(2);
    props.setMonthlyPayments(Number(monthlyPayment));
  };

  return (
    <div>
      <form className='initialForm' onSubmit={handleSubmit}>
        <div className='inputContainer'>
          <label htmlFor='debtPrincipal' className='inputLabel'>
            $
          </label>
          <input className='formInput' type='text' value={debtPrincipal} onChange={(e) => setDebtPrincipal(e.target.value)} placeholder='Debt Amount' required />
        </div>
        <div className='inputContainer'>
          <label htmlFor='interestRate' className='inputLabel'>
            %
          </label>
          <input className='formInput' type='text' value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder='Interest Rate' />
        </div>
        <button className='btn formBtn'>Calculate</button>
      </form>
    </div>
  );
};

export default Form;
