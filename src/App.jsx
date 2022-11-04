import React, { useState } from 'react';

import './Base.css';
import './App.css';

import Form from './Components/Form';
import PaymentHistory from './Components/PaymentHistory';
import DebtNumbers from './Components/DebtNumbers';
import Modal from './Components/Modal';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className='App'>
        <div className='leftPanel'>
          <h2 className='appHeader'>Debt-Free Calculator</h2>
          <Form />
          <PaymentHistory />
          <button onClick={() => setOpenModal(true)} className='btn submitBtn paymentBtn'>
            Make A Payment
          </button>
          {openModal && <Modal setModalState={setOpenModal} />}
        </div>
        <div className='rightPanel'>
          <DebtNumbers />
        </div>
      </div>
    </div>
  );
};

export default App;
