import React from 'react';
import '../Base.css';
import './PaymentHistory.css';

function PaymentHistory() {
  return (
    <div className='historyContainer'>
      <h4 className='historyTitle'>Payment History</h4>
      <ul className='list'>
        <li className='listItem'>
          <div className='paymentDate'>10/28/2022</div>
          <div className='paymentAmount'>$867.42</div>
          <div className='totalLeft'>$37,272.90</div>
        </li>
        <li className='listItem'>
          <div className='paymentDate'>09/28/2022</div>
          <div className='paymentAmount'>$867.42</div>
          <div className='totalLeft'>$38,140.32</div>
        </li>
        <li className='listItem'>
          <div className='paymentDate'>08/28/2022</div>
          <div className='paymentAmount'>$867.42</div>
          <div className='totalLeft'>$39,007.74</div>
        </li>
        <li className='listItem'>
          <div className='paymentDate'>07/28/2022</div>
          <div className='paymentAmount'>$867.42</div>
          <div className='totalLeft'>$39,875.16</div>
        </li>
        <li className='listItem'>
          <div className='paymentDate'>06/28/2022</div>
          <div className='paymentAmount'>$867.42</div>
          <div className='totalLeft'>$40,742.58</div>
        </li>
      </ul>
      <div>
        <button className='btn link'>show more history</button>
      </div>
    </div>
  );
}

export default PaymentHistory;
