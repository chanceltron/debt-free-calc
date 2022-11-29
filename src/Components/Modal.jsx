import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { handleClose, show, children } = this.props;
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          <div>
            <h1>You are Debt Free!</h1>
          </div>
          <button type='button' onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
  }
}
