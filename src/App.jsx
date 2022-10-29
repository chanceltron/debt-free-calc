import React from 'react';
import AppCSS from './App.module.css';

import Form from './Form';
import PaymentHistory from './PaymentHistory';

function App() {
  return (
    <div className={AppCSS.App}>
      <div className={AppCSS.leftPanel}>
        <Form></Form>
        <PaymentHistory></PaymentHistory>
      </div>
    </div>
  );
}

export default App;
