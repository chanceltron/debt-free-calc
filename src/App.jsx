import React, { useState } from 'react';

import './Base.css';
import './App.css';

import Form from './Components/Form';
import PaymentHistory from './Components/PaymentHistory';
import DebtNumbers from './Components/DebtNumbers';

const App = () => {
  const [debtTotal, setDebtTotal] = useState('0');

  return (
    <div>
      <div className='App'>
        <div className='leftPanel'>
          <h2 className='appHeader'>Debt-Free Calculator</h2>
          <Form setDebtTotal={(debtTotal) => setDebtTotal(debtTotal)} />
          <PaymentHistory totalDebt={debtTotal} />
        </div>
        <div className='rightPanel'>
          <DebtNumbers debtTotal={debtTotal} />
        </div>
      </div>
    </div>
  );
};

export default App;
