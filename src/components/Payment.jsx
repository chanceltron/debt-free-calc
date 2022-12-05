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

  handleInputs = ({ target: { value } }) => {
    const newPrincipal = this.props.debtTotal - value;
    this.setState({ paymentAmount: value });
    this.props.handleChange('debtPrincipal', +newPrincipal);
  };

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
        paymentAmount: +this.state.paymentAmount,
        totalLeft: +this.props.debtTotal - +this.state.paymentAmount,
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
      this.props.handleModal(true);
      this.setState({ paymentBtnVisible: false, resetBtnVisible: true });
      this.props.handleChange('debtPrincipal', '-');
      this.props.debtUpdateHandler();
    }
  }

  render() {
    const buttons = [
      { id: 1, clickEvent: this.handleSubmit, classes: `btn paymentBtn ${this.state.paymentBtnVisible ? '' : 'hidden'}`, text: 'Make Payment' },
      { id: 2, clickEvent: () => this.props.handleReset(), classes: `btn resetBtn ${this.state.resetBtnVisible ? '' : 'hidden'}`, text: 'Start Another Loan' },
    ];
    return (
      <div className='paymentContainer'>
        <div className='makePayment'>
          <h1>Manage your Account</h1>
          <form>
            <div className={`inputContainer paymentInput ${this.state.paymentAlert ? 'alert' : ''}`}>
              <label htmlFor='newPayment' className='inputLabel'>
                $
              </label>
              <input
                id='newPayment'
                name='newPayment'
                className='formInput'
                type='text'
                placeholder='Payment Amount'
                value={this.state.paymentAmount}
                onChange={this.handleInputs}
                required
              />
            </div>
            <div className={`alertText ${this.state.paymentAlert ? '' : 'hiddenAlert'}`}>Minimum Payment is Required</div>
            {buttons.map((button) => {
              const { id, clickEvent, classes, text } = button;
              return (
                <button onClick={clickEvent} className={classes} key={id}>
                  {text}
                </button>
              );
            })}
          </form>
        </div>
        <PaymentList payments={this.state.paymentArray}></PaymentList>
      </div>
    );
  }
}
