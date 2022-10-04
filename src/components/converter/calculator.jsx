import React from 'react';
import css from './converter.css';

function Calculator({ rates, value, currency, onChangeValue, onChangeCurrency }) {
    console.log(rates)
  return (
    <div className="calcs-section_wrapper">
      <div className="position">
        <div className="converter-calc">
          <span>i have</span>
          <div className="d-flex">
            <input
              placeholder={0}
              type="number"
              value={value}
              className="calc-section-input"
              onChange={(e) => onChangeValue(e.target.value)}
            />
            <select onChange={(e) => onChangeCurrency(e.target.value)}>
              {rates.map((v, i) => (
                <option key={i}>{v.cc}</option>
              ))}
            </select>
          </div>
          <span>1 eur = 30 uan</span>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
