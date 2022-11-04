import React from 'react';

import '../Base.css';
import './DebtNumbers.css';

const DebtNumbers = () => {
  return (
    <div className='debtTracker'>
      <div className='totalDebtSection'>
        <h2 className='sectionHeader'>Total Debt</h2>
        <div className='totalDebt'>$37,272.90</div>
      </div>
      <div className='monthlyPaymentSection'>
        <h2 className='sectionHeader'>Monthly Minimum Payment</h2>
        <div className='minimumPayment'>$867.42</div>
      </div>
    </div>
  );
};

export default DebtNumbers;
