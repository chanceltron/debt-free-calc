import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  constructor(props) {
    super();
  }

  handleClose = () => this.props.handleModal(false);

  handleReset = () => document.location.reload();

  render() {
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          <div>
            <button className='btn closeBtn' onClick={this.handleClose}>
              X
            </button>
          </div>
          <div className='modalHeader'>
            <h1>Congratulations!</h1>
            <h2>You are Debt Free!</h2>
          </div>
          <button className='btn resetBtn' type='button' onClick={this.handleReset}>
            Start a New Loan
          </button>
        </section>
      </div>
    );
  }
}
