import React, { useState } from 'react';
import PaymentList from './PaymentList';
import '../Base.css';
import './Payment.css';

const Payment = ({ debtTotal, setDebtTotal }) => {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [payments, setPayments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const currentDate = today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();

    const newPayment = {
      id: Date.now(),
      date: currentDate,
      paymentAmount: parseFloat(paymentAmount),
      totalLeft: parseFloat(debtTotal) - parseFloat(paymentAmount),
    };

    setDebtTotal(newPayment.totalLeft);
    setPayments([...payments, newPayment]);
  };

  return (
    <div className='container'>
      <div className='makePayment'>
        <h1>Make a Payment</h1>
        <form>
          <div className='inputContainer'>
            <label htmlFor='debtPrincipal' className='inputLabel'>
              $
            </label>
            <input className='formInput' type='text' placeholder='Make a Payment' onChange={(e) => setPaymentAmount(e.target.value)} required />
          </div>
          <button onClick={handleSubmit} className='btn paymentBtn'>
            Make Payment
          </button>
        </form>
      </div>
      <PaymentList payments={payments}></PaymentList>
    </div>
  );
};

export default Payment;
