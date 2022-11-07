import React from 'react';

import '../Base.css';
import './DebtNumbers.css';

const DebtNumbers = ({ debtTotal }) => {
  function numberWithCommas() {
    return debtTotal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }

  function monthlyPayments() {
    let dividedNum = debtTotal / 12;
    return dividedNum.toFixed(2);
  }

  return (
    <div className='debtTracker'>
      <div className='totalDebtSection round-pill'>
        <h2 className='sectionHeader'>Total Debt</h2>
        <div className='totalDebt'>${numberWithCommas()}</div>
      </div>
      <div className='monthlyPaymentSection'>
        <h2 className='sectionHeader'>Monthly Minimum Payment</h2>
        <div className='minimumPayment'>${monthlyPayments()}</div>
      </div>
    </div>
  );
};

export default DebtNumbers;
