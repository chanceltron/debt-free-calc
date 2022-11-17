import React from 'react';

import '../Base.css';
import './Form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      debtPrincipal: 0,
      interestRate: 0,
      termMonths: 12,
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

  handleSubmit = (e) => {
    e.preventDefault();
    const { debtPrincipal, interestRate, termMonths } = this.state;

    const interestRateCalc = interestRate / Math.pow(10, 2);
    const interest = interestRateCalc * debtPrincipal;
    const debtTotalCalc = Number(interest) + Number(debtPrincipal);
    const debtTotal = debtTotalCalc.toFixed(2);

    const dividedNum = debtTotal / termMonths;
    const monthlyPaymentAmnt = dividedNum.toFixed(2);

    this.props.debtUpdateHandler(Number(debtTotal));
    this.props.paymentUpdateHandler(Number(monthlyPaymentAmnt));
  };

  render() {
    return (
      <div>
        <form className='initialForm' onSubmit={this.handleSubmit}>
          <div className='inputContainer'>
            <label htmlFor='debtPrincipal' className='inputLabel'>
              $
            </label>
            <input className='formInput' type='text' onChange={({ target: { value } }) => this.setState({ debtPrincipal: value })} placeholder='Loan Amount' required />
          </div>
          <div className='inputContainer'>
            <label htmlFor='interestRate' className='inputLabel'>
              %
            </label>
            <input className='formInput' type='text' onChange={({ target: { value } }) => this.setState({ interestRate: value })} placeholder='Interest Rate' required />
          </div>

          <div className='buttonGroup'>
            <button onClick={this.handleSwitcher} value='12' className='switcherBtn active'>
              12 Mo.
            </button>
            <button onClick={this.handleSwitcher} value='24' className='switcherBtn'>
              24 Mo.
            </button>
          </div>
          <button className='btn formBtn'>Calculate</button>
        </form>
      </div>
    );
  }
}
