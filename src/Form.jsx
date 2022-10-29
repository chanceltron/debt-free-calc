import React from 'react';
import FormCSS from './Form.module.css';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h2>Debt-Free Calculator</h2>
        <form action='handleCalc'>
          <input className={FormCSS.input} type='number' placeholder='Debt Amount' />
          <input className={FormCSS.input} type='number' placeholder='Interest Rate' />
          <button className={FormCSS.btn}>Calculate</button>
        </form>
      </div>
    );
  }
}

export default Form;
