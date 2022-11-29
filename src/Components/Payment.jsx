import React from 'react';
import PaymentList from './PaymentList';
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

  handlePrincipal = (payment) => {
    const newPrincipal = this.props.debtTotal - payment;
    this.setState({ paymentAmount: payment });
    this.props.setPrincipal(Number(newPrincipal));
  };

  handleReset = () => document.location.reload();

  handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const currentDate = today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();

    if (this.state.paymentAmount < this.props.monthlyPayment) {
      this.setState({ paymentAlert: true });
    } else if (isNaN(this.state.paymentAmount)) {
      this.setState({ paymentAlert: true });
    } else {
      const newPayment = {
        id: Date.now(),
        date: currentDate,
        paymentAmount: Number(this.state.paymentAmount),
        totalLeft: Number(this.props.debtTotal) - Number(this.state.paymentAmount),
      };

      if (this.state.paymentAmount > this.props.debtTotal) {
        newPayment.paymentAmount = this.props.debtTotal;
      }

      this.props.debtUpdateHandler(newPayment.totalLeft);

      this.setState((prevState) => ({ paymentArray: [...prevState.paymentArray, newPayment] }));

      if (this.state.paymentAlert) {
        this.setState({ paymentAlert: false });
      }
    }
    this.setState({ paymentAmount: '' });
  };

  componentDidUpdate() {
    if (this.props.debtTotal <= 0) {
      this.props.handleOpen();
      this.setState({ paymentBtnVisible: false, resetBtnVisible: true });
      this.props.setPrincipal('-');
      this.props.debtUpdateHandler();
    }
  }

  render() {
    return (
      <div className='paymentContainer'>
        <div className='makePayment'>
          <h1>Manage your Account</h1>
          <form>
            <div className={`inputContainer paymentInput ${this.state.paymentAlert ? 'alert' : ''}`}>
              <label htmlFor='debtPrincipal' className='inputLabel'>
                $
              </label>
              <input
                className='formInput'
                type='text'
                placeholder='Payment Amount'
                value={this.state.paymentAmount}
                onChange={(e) => this.handlePrincipal(e.target.value)}
                required
              />
            </div>
            <div className={`alertText ${this.state.paymentAlert ? '' : 'hiddenAlert'}`}>Minimum Payment is Required</div>
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
