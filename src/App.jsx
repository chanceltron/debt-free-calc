import React from 'react';

import './Base.css';
import './App.css';

import Form from './Components/Form';
import Payment from './Components/Payment';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      debtTotal: '-',
      monthlyPayment: '-',
    };
  }

  debtUpdateHandler = (numFromChild) => {
    this.setState({ debtTotal: numFromChild });
  };

  paymentUpdateHandler = (numFromChild) => {
    this.setState({ monthlyPayment: numFromChild });
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

  render() {
    return (
      <div>
        <div className='App'>
          <h2 className='appHeader'>Debt-Free Calculator</h2>
          <div className='topPanel'>
            <Form debtUpdateHandler={this.debtUpdateHandler} paymentUpdateHandler={this.paymentUpdateHandler} />
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
          <Payment debtTotal={this.state.debtTotal} monthlyPayment={this.state.monthlyPayment} debtUpdateHandler={this.debtUpdateHandler} />
        </div>
      </div>
    );
  }
}
