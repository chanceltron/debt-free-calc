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

  handleInputs = ({ target: { name, value } }) => this.props.handleChange(name, +value);

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.debtUpdateHandler();
  };

  render() {
    const inputs = [
      { id: 'debtPrincipal', label: '$', placeholder: 'Loan Amount' },
      { id: 'interestRate', label: '%', placeholder: 'Interest Rate' },
    ];
    return (
      <div>
        <form className='initialForm' onSubmit={this.handleSubmit}>
          {inputs.map((item) => {
            const { id, label, placeholder } = item;
            return (
              <div className='inputContainer' key={id}>
                <label htmlFor={id} className='inputLabel'>
                  {label}
                </label>
                <input id={id} name={id} className='formInput' type='text' onChange={this.handleInputs} placeholder={placeholder} required />
              </div>
            );
          })}
          <button className='btn formBtn'>Calculate</button>
        </form>
      </div>
    );
  }
}
