import React from 'react';

import './PaymentList.css';

export default function PaymentList({ payments }) {
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
