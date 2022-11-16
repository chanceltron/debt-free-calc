import React, { useState } from 'react';
import PaymentList from './PaymentList';
import '../Base.css';
import './Payment.css';

const Payment = ({ debtTotal, setDebtTotal, monthlyPayments }) => {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [payments, setPayments] = useState([]);
  const [paymentAlert, setPaymentAlert] = useState(false);
  const [paymentBtnVisible, setPaymentBtnVisible] = useState(true);
  const [resetBtnVisible, setResetBtnVisible] = useState(false);

  const handleReset = () => document.location.reload();

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const currentDate = today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();

    if (paymentAmount < monthlyPayments) {
      setPaymentAlert(true);
      setPaymentAmount('Looks like your payment is a little short. Please try again.');
    } else if (isNaN(paymentAmount)) {
      setPaymentAlert(true);
      setPaymentAmount('Please enter a valid number');
    } else {
      const newPayment = {
        id: Date.now(),
        date: currentDate,
        paymentAmount: Number(paymentAmount),
        totalLeft: Number(debtTotal) - Number(paymentAmount),
      };

      setDebtTotal(newPayment.totalLeft);

      setPayments([...payments, newPayment]);
      if (paymentAlert) {
        setPaymentAlert(false);
      }
    }
    if (debtTotal <= 0) {
      setPaymentBtnVisible(false);
      setResetBtnVisible(true);
    }
  };

  return (
    <div className='container'>
      <div className='makePayment'>
        <h1>Make a Payment</h1>
        <form>
          <div className={`inputContainer ${paymentAlert ? 'alert' : ''}`}>
            <label htmlFor='debtPrincipal' className='inputLabel'>
              $
            </label>
            <input className='formInput' type='text' value={paymentAmount} placeholder='Make a Payment' onChange={(e) => setPaymentAmount(e.target.value)} required />
          </div>
          <button onClick={handleSubmit} className={`btn paymentBtn ${paymentBtnVisible ? '' : 'hidden'}`}>
            Make Payment
          </button>
          <button onClick={handleReset} className={`btn resetBtn ${resetBtnVisible ? '' : 'hidden'}`}>
            Start Another Loan
          </button>
        </form>
      </div>
      <PaymentList payments={payments}></PaymentList>
    </div>
  );
};

export default Payment;
