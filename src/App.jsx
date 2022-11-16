import React, { useState } from 'react';

import './Base.css';
import './App.css';

import Form from './Components/Form';
import Payment from './Components/Payment';

const App = () => {
  const [debtTotal, setDebtTotal] = useState('0');
  const [monthlyPayments, setMonthlyPayments] = useState('0');

  const numberWithCommas = () => {
    const number = debtTotal * 1;
    const twoDecimal = number.toFixed(2);
    const addThoseCommas = twoDecimal.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    if (debtTotal < 0) {
      return 'You are Debt Free!';
    } else {
      return '$ ' + addThoseCommas;
    }
  };

  return (
    <div>
      <div className='App'>
        <h2 className='appHeader'>Debt-Free Calculator</h2>
        <div className='topPanel'>
          <Form setDebtTotal={(debtTotal) => setDebtTotal(debtTotal)} setMonthlyPayments={(monthlyPayments) => setMonthlyPayments(monthlyPayments)} />
          <div className='debtTracker round-pill'>
            <div className='totalDebtSection round-pill'>
              <h2 className='header'>Total Debt</h2>
              <div className='totalDebt'>{numberWithCommas()}</div>
            </div>
            <div className='monthlyPaymentSection'>
              <h2 className='subheader'>Monthly Minimum Payment</h2>
              <div className='minimumPayment'>{monthlyPayments}</div>
            </div>
          </div>
        </div>
        <div className='bottomPanel'></div>
        <Payment debtTotal={debtTotal} setDebtTotal={(debtTotal) => setDebtTotal(debtTotal)} />
      </div>
    </div>
  );
};

export default App;
