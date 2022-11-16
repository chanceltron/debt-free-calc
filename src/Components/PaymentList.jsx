import React from 'react';

import './PaymentList.css';

export default function PaymentList({ payments }) {
  return (
    <ul className='paymentList'>
      <h4 className='historyTitle'>Payment History</h4>
      {payments.map((payment) => (
        <li key={payment.id} className='listItem'>
          <div className='paymentDate'>{payment.date}</div>
          <div className='paymentAmount'>${payment.paymentAmount}</div>
          <div className='totalLeft'>${payment.totalLeft}</div>
        </li>
      ))}
    </ul>
  );
}
