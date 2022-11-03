import React from 'react';
import './Modal.css';

// import ModalCSS from './Modal.module.css';

function Modal({ openModal }) {
  return (
    <div className='modalBg'>
      <div className='modalContainer'>
        <div className='modalHeader'>
          <h2 className='modalTitle'>Make A Payment</h2>
          <button className='modalCloseBtn' onClick={() => openModal(false)}>
            {' '}
            X{' '}
          </button>
        </div>
        <div className='modalBody'>
          <div className='label'>Payment Amount</div>
          <div className='inputContainer round-pill'>
            <label className='inputLabel' htmlFor='paymentAmount'>
              $
            </label>
            <input name='paymentAmount' type='number' />
          </div>
        </div>
        <div className='modalFooter'>
          <button className='btn cancelBtn round-pill' onClick={() => openModal(false)}>
            Cancel
          </button>
          <button className='btn submitBtn round-pill'>Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
