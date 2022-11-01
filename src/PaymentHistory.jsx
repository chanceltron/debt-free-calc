import React from 'react';
import HistoryCSS from './PaymentHistory.module.css';

class PaymentHistory extends React.Component {
  render() {
    return (
      <div>
        <h4 className={HistoryCSS.sectionHeader}>Payment History</h4>
        <ul className={HistoryCSS.list}>
          <li className={HistoryCSS.listItem}>
            <div className={HistoryCSS.paymentDate}>10/28/2022</div>
            <div className={HistoryCSS.paymentAmount}>$867.42</div>
            <div className={HistoryCSS.totalLeft}>$37,272.90</div>
          </li>
          <li className={HistoryCSS.listItem}>
            <div className={HistoryCSS.paymentDate}>09/28/2022</div>
            <div className={HistoryCSS.paymentAmount}>$867.42</div>
            <div className={HistoryCSS.totalLeft}>$38,140.32</div>
          </li>
          <li className={HistoryCSS.listItem}>
            <div className={HistoryCSS.paymentDate}>08/28/2022</div>
            <div className={HistoryCSS.paymentAmount}>$867.42</div>
            <div className={HistoryCSS.totalLeft}>$39,007.74</div>
          </li>
          <li className={HistoryCSS.listItem}>
            <div className={HistoryCSS.paymentDate}>07/28/2022</div>
            <div className={HistoryCSS.paymentAmount}>$867.42</div>
            <div className={HistoryCSS.totalLeft}>$39,875.16</div>
          </li>
          <li className={HistoryCSS.listItem}>
            <div className={HistoryCSS.paymentDate}>06/28/2022</div>
            <div className={HistoryCSS.paymentAmount}>$867.42</div>
            <div className={HistoryCSS.totalLeft}>$40,742.58</div>
          </li>
        </ul>
        <div>
          <a href='#' className={HistoryCSS.link}>
            show more history
          </a>
        </div>
        <button className={HistoryCSS.paymentBtn}>Make A Payment</button>
      </div>
    );
  }
}

export default PaymentHistory;
