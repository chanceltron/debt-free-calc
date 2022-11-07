import React, { useState } from 'react';

import './Base.css';
import './App.css';

import Form from './Components/Form';
import PaymentHistory from './Components/PaymentHistory';
import DebtNumbers from './Components/DebtNumbers';
import Modal from './Components/Modal';

const App = () => {
  const [debtTotal, setDebtTotal] = useState('');
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className='App'>
        <div className='leftPanel'>
          <h2 className='appHeader'>Debt-Free Calculator</h2>
          <Form setDebtTotal={(debtTotal) => setDebtTotal(debtTotal)} />
          <PaymentHistory />
          <button onClick={() => setOpenModal(true)} className='btn submitBtn paymentBtn'>
            Make A Payment
          </button>
          {openModal && <Modal setModalState={setOpenModal} debtTotal={debtTotal} setDebtTotal={(debtTotal) => setDebtTotal(debtTotal)} />}
        </div>
        <div className='rightPanel'>
          <DebtNumbers debtTotal={debtTotal} />
        </div>
      </div>
    </div>
  );
};

export default App;
