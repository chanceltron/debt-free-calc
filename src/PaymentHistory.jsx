import React from 'react';
import HistoryCSS from './PaymentHistory.module.css';

class PaymentHistory extends React.Component {
  render() {
    return (
      <div>
        <h4>Payment History</h4>
        <ul>
          <HistoryList></HistoryList>
        </ul>
      </div>
    );
  }
}

export default PaymentHistory;
