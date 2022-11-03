import React from 'react';
import './DebtNumbers.css';

class DebtNumbers extends React.Component {
  render() {
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
  }
}

export default DebtNumbers;
