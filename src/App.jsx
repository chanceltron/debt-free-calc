import React, { useState } from 'react';

import './Base.css';
import './App.css';

import Form from './Components/Form';
import Payment from './Components/Payment';

const App = () => {
  const [debtTotal, setDebtTotal] = useState('-');
  const [monthlyPayments, setMonthlyPayments] = useState('-');

  const readableFormat = (number) => {
    if (isNaN(number) || number < 0) {
      return '$0';
    } else {
      const fixedNum = Number(number).toFixed(2);
      const addComma = fixedNum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
      return '$' + addComma;
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
              <div className='totalDebt'>{readableFormat(debtTotal)}</div>
            </div>
            <div className='monthlyPaymentSection'>
              <h2 className='subheader'>Monthly Minimum Payment</h2>
              <div className='minimumPayment'>{readableFormat(monthlyPayments)}</div>
            </div>
          </div>
        </div>
        <div className='bottomPanel'></div>
        <Payment debtTotal={debtTotal} setDebtTotal={(debtTotal) => setDebtTotal(debtTotal)} monthlyPayments={monthlyPayments} />
      </div>
    </div>
  );
};

export default App;
