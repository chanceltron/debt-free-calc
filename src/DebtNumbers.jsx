import React from 'react';
import DebtCSS from './DebtNumbers.module.css';

class DebtNumbers extends React.Component {
  render() {
    return (
      <div>
        <div className={DebtCSS.totalDebtSection}>
          <h2 className={DebtCSS.sectionHeader}>Total Debt</h2>
          <div className={DebtCSS.totalDebt}>$37,272.90</div>
        </div>
      </div>
    );
  }
}

export default DebtNumbers;
