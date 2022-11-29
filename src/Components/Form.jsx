import React from 'react';

import './Form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      debtPrincipal: 0,
      interestRate: 0,
    };
  }

  handleSwitcher = (e) => {
    e.preventDefault();

    if (document.querySelector(`.switcherBtn.active`) !== null) {
      document.querySelector(`.switcherBtn.active`).classList.remove('active');
    }
    e.target.classList.add('active');
    this.setState({ termMonths: e.target.value });
  };

  handlePrincipal = (debtPrincipal) => {
    this.props.setPrincipal(Number(debtPrincipal));
  };
  handleInterest = (interestRate) => {
    this.props.setInterestRate(Number(interestRate) / Math.pow(10, 2));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.debtUpdateHandler();
  };

  render() {
    return (
      <div>
        <form className='initialForm' onSubmit={this.handleSubmit}>
          <div className='inputContainer'>
            <label htmlFor='debtPrincipalInput' className='inputLabel'>
              $
            </label>
            <input id='debtPrincipalInput' className='formInput' type='text' onChange={(e) => this.handlePrincipal(e.target.value)} placeholder='Loan Amount' required />
          </div>
          <div className='inputContainer'>
            <label htmlFor='interestRateInput' className='inputLabel'>
              %
            </label>
            <input id='interestRateInput' className='formInput' type='text' onChange={(e) => this.handleInterest(e.target.value)} placeholder='Interest Rate' required />
          </div>
          <button className='btn formBtn'>Calculate</button>
        </form>
      </div>
    );
  }
}
