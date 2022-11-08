import React, { useState } from 'react';

import '../Base.css';
import './Modal.css';

const Modal = ({ setModalState }) => {
  const [paymentAmount, setPaymentAmount] = useState('');

  // const calcNewDebt = (e) => {
  //   const newTotal = debtTotal - paymentAmount;

  //   setDebtTotal(newTotal);
  // };

  return (
    <div className='modalBg'>
      <div className='modalContainer'>
        <div className='modalHeader'>
          <h2 className='modalTitle'>Make A Payment</h2>
          <button className='modalCloseBtn' onClick={() => setModalState(false)}>
            X
          </button>
        </div>
        <div className='modalBody'>
          <div className='label'>Payment Amount</div>
          <form className='inputContainer round-pill'>
            <label className='inputLabel' htmlFor='paymentAmount'>
              $
            </label>
            <input name='paymentAmount' type='number' onChange={(e) => setPaymentAmount(e.target.value)} />
          </form>
        </div>
        <div className='modalFooter'>
          <button className='btn cancelBtn round-pill' onClick={() => setModalState(false)}>
            Cancel
          </button>
          <button className='btn submitBtn round-pill'>Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
