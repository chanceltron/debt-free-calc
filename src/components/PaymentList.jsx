import React from 'react';

import './PaymentList.css';
import readableFormat from '../functions/readableFormat';

export default function PaymentList({ payments }) {
  return (
    <ul className='paymentList'>
      <h4 className='historyTitle'>Payment History</h4>
      {payments.map((payment) => (
        <li key={payment.id} className='listItem'>
          <div className='paymentDate'>{payment.date}</div>
          <div className='paymentAmount'>{readableFormat(payment.paymentAmount.toFixed(2))}</div>
          <div className='totalLeft'>{readableFormat(payment.totalLeft.toFixed(2))}</div>
        </li>
      ))}
    </ul>
  );
}
