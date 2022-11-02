import React from 'react';

import ModalCSS from './Modal.module.css';

function Modal({ closeModal }) {
  return (
    <div className={ModalCSS.modalBg}>
      <div className={ModalCSS.modalContainer}>
        <div className={ModalCSS.titleClose}></div>
        <div className={ModalCSS.header}>
          <h2 className={ModalCSS.title}>Make A Payment</h2>
          <button className={ModalCSS.titleCloseBtn} onClick={() => closeModal(false)}>
            {' '}
            X{' '}
          </button>
        </div>
        <div className={ModalCSS.body}>
          <div className={ModalCSS.inputContainer}>
            <label className={ModalCSS.inputLabel} htmlFor='paymentAmount'>
              $
            </label>
            <input className={ModalCSS.input} name='paymentAmount' type='number' />
          </div>
        </div>
        <div className={ModalCSS.footer}>
          <button className={ModalCSS.cancelBtn} onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button className={ModalCSS.proceedBtn}>Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
