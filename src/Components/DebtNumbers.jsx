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
        <div className={DebtCSS.subtotalSection}>
          <div className={DebtCSS.totalPrincipalSection}>
            <h2 className={DebtCSS.sectionHeader}>Total Principal</h2>
            <div className={DebtCSS.subtotalDebt}>$38,000</div>
          </div>
          <div className={DebtCSS.totalInterestSection}>
            <h2 className={DebtCSS.sectionHeader}>Total Interest</h2>
            <div className={DebtCSS.subtotalDebt}>$3,610</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DebtNumbers;
