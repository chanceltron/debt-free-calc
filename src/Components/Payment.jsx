import React from 'react';
import PaymentList from './PaymentList';
import '../Base.css';
import './Payment.css';

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentAmount: '',
      paymentArray: [],
      paymentAlert: false,
      paymentBtnVisible: true,
      resetBtnVisible: false,
    };
  }

  completeHandler = () => {
    this.setState({ paymentBtnVisible: false, resetBtnVisible: true });
    this.props.debtUpdateHandler('-');
  };

  handleReset = () => document.location.reload();

  handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const currentDate = today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();

    if (this.state.paymentAmount < this.props.monthlyPayment) {
      this.setState({ paymentAlert: true, paymentAmount: 'Looks like your payment is a little short. Please try again.' });
    } else if (isNaN(this.state.paymentAmount)) {
      this.setState({ paymentAlert: true, paymentAmount: 'Please enter a valid number' });
    } else {
      const newPayment = {
        id: Date.now(),
        date: currentDate,
        paymentAmount: Number(this.state.paymentAmount),
        totalLeft: Number(this.props.debtTotal) - Number(this.state.paymentAmount),
      };

      this.props.debtUpdateHandler(newPayment.totalLeft);

      this.setState((prevState) => ({ paymentArray: [...prevState.paymentArray, newPayment] }));

      if (this.state.paymentAlert) {
        this.setState({ paymentAlert: false });
      }
    }
  };

  componentDidUpdate() {
    if (this.props.debtTotal <= 0) {
      this.completeHandler();
    }
  }

  render() {
    return (
      <div className='paymentContainer'>
        <div className='makePayment'>
          <h1>Make a Payment</h1>
          <form>
            <div className={`inputContainer paymentInput ${this.state.paymentAlert ? 'alert' : ''}`}>
              <label htmlFor='debtPrincipal' className='inputLabel'>
                $
              </label>
              <input
                className='formInput'
                type='text'
                value={this.state.paymentAmount}
                placeholder='Make a Payment'
                onChange={({ target: { value } }) => this.setState({ paymentAmount: value })}
                required
              />
            </div>
            <button onClick={this.handleSubmit} className={`btn paymentBtn ${this.state.paymentBtnVisible ? '' : 'hidden'}`}>
              Make Payment
            </button>
            <button onClick={this.handleReset} className={`btn resetBtn ${this.state.resetBtnVisible ? '' : 'hidden'}`}>
              Start Another Loan
            </button>
          </form>
        </div>
        <PaymentList payments={this.state.paymentArray}></PaymentList>
      </div>
    );
  }
}
