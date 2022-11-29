import React from 'react';

import './App.css';

import Form from './Components/Form';
import Payment from './Components/Payment';
import Modal from './Components/Modal';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      debtPrincipal: '-',
      interestRate: '-',
      debtTotal: '-',
      monthlyPayment: '-',
      modalVisible: false,
    };
  }

  setPrincipal = (numFromChild) => {
    const toFixed = Number(numFromChild).toFixed(2);
    this.setState({ debtPrincipal: Number(toFixed) });
  };

  setInterestRate = (numFromChild) => {
    this.setState({ interestRate: numFromChild });
  };

  debtUpdateHandler = () => {
    const { interestRate, debtPrincipal } = this.state;
    const interest = (interestRate / 12) * Number(debtPrincipal);
    const minimum = debtPrincipal * 0.01;

    const debt = (Number(debtPrincipal) + Number(interest)).toFixed(2);
    const payment = (minimum + interest).toFixed(2);

    this.setState({ debtTotal: Number(debt) });
    this.setState({ monthlyPayment: Number(payment) });
  };

  readableFormat = (number) => {
    if (isNaN(number) || number < 0) {
      return '$0';
    } else {
      const fixedNum = Number(number).toFixed(2);
      const addComma = fixedNum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
      return '$' + addComma;
    }
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };
  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    return (
      <div>
        <Modal show={this.state.modalVisible} handleClose={this.hideModal} />

        <div className='App'>
          <h2 className='appHeader'>Debt-Free Calculator</h2>
          <div className='topPanel'>
            <Form setPrincipal={this.setPrincipal} setInterestRate={this.setInterestRate} debtUpdateHandler={this.debtUpdateHandler} />
            <div className='debtTracker round-pill'>
              <div className='totalDebtSection round-pill'>
                <h2 className='header'>Total Debt</h2>
                <div className='totalDebt'>{this.readableFormat(this.state.debtTotal)}</div>
              </div>
              <div className='monthlyPaymentSection'>
                <h2 className='subheader'>Monthly Minimum Payment</h2>
                <div className='minimumPayment'>{this.readableFormat(this.state.monthlyPayment)}</div>
              </div>
            </div>
          </div>
          <div className='bottomPanel'></div>
          <Payment
            setPrincipal={this.setPrincipal}
            setInterestRate={this.setInterestRate}
            debtUpdateHandler={this.debtUpdateHandler}
            debtTotal={this.state.debtTotal}
            monthlyPayment={this.state.monthlyPayment}
            handleOpen={this.showModal}
          />
        </div>
      </div>
    );
  }
}
