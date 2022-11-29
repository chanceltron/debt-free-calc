import React from 'react';

import './App.css';

import Form from './components/Form';
import Payment from './components/Payment';
import Modal from './components/Modal';
import readableFormat from './functions/readableFormat';

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

  handleChange = (name, value) => {
    const toFixed = Number(value).toFixed(2);
    this.setState({ [`${name}`]: +toFixed });
  };

  debtUpdateHandler = () => {
    const { interestRate, debtPrincipal } = this.state;
    const interestDecimal = +interestRate / Math.pow(10, 2);
    const interest = (interestDecimal / 12) * +debtPrincipal;
    const minimum = debtPrincipal * 0.01;

    const debt = (+debtPrincipal + +interest).toFixed(2);
    const payment = (minimum + interest).toFixed(2);

    this.setState((prevState) => ({ ...prevState, debtTotal: +debt, monthlyPayment: +payment }));
  };

  handleModal = (bool) => {
    this.setState({ modalVisible: bool });
  };

  render() {
    return (
      <div>
        <Modal show={this.state.modalVisible} handleModal={this.handleModal} />

        <div className='App'>
          <h2 className='appHeader'>Debt-Free Calculator</h2>
          <div className='topPanel'>
            <Form handleChange={this.handleChange} debtUpdateHandler={this.debtUpdateHandler} />
            <div className='debtTracker round-pill'>
              <div className='totalDebtSection round-pill'>
                <h2 className='header'>Total Debt</h2>
                <div className='totalDebt'>{readableFormat(this.state.debtTotal)}</div>
              </div>
              <div className='monthlyPaymentSection'>
                <h2 className='subheader'>Monthly Minimum Payment</h2>
                <div className='minimumPayment'>{readableFormat(this.state.monthlyPayment)}</div>
              </div>
            </div>
          </div>
          <div className='bottomPanel'></div>
          <Payment
            handleChange={this.handleChange}
            debtUpdateHandler={this.debtUpdateHandler}
            debtTotal={this.state.debtTotal}
            monthlyPayment={this.state.monthlyPayment}
            handleModal={this.handleModal}
          />
        </div>
      </div>
    );
  }
}
