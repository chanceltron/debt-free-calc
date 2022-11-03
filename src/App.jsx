import React from 'react';
import { useState } from 'react';

import './App.css';

import Form from './Components/Form';
import PaymentHistory from './Components/PaymentHistory';
import DebtNumbers from './Components/DebtNumbers';
import Modal from './Components/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className='App'>
        <div className='leftPanel'>
          <h2 className='appHeader'>Debt-Free Calculator</h2>
          <Form></Form>
          <PaymentHistory></PaymentHistory>
          <button onClick={() => setOpenModal(true)} className='btn submitBtn paymentBtn'>
            Make A Payment
          </button>
          {openModal && <Modal openModal={setOpenModal} />}
        </div>
        <div className='rightPanel'>
          <DebtNumbers></DebtNumbers>
        </div>
      </div>
    </div>
  );
}

export default App;
