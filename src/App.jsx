import React from 'react';
import AppCSS from './App.module.css';

import Form from './Form';
import PaymentHistory from './PaymentHistory';
import DebtNumbers from './DebtNumbers';

function App() {
  return (
    <div className={AppCSS.App}>
      <div className={AppCSS.leftPanel}>
        <h2 className={AppCSS.sectionHeader}>Debt-Free Calculator</h2>
        <Form></Form>
        <PaymentHistory></PaymentHistory>
      </div>
      <div className={AppCSS.rightPanel}>
        <DebtNumbers></DebtNumbers>
      </div>
    </div>
  );
}

export default App;
