import React from 'react';
import css from './converter.css';
import CurrencyService from '../../services/currency';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Calculator from './calculator';

function Converter() {
  const [rates, setRates] = useState([]);
    //better use consts from responce
  const [leftCurrency, setleftCurrency] = useState('AUD');
  const [rightCurrency, setrightCurrency] = useState('AUD');

  const [leftValue, setleftValue] = useState(0);
  const [rightValue, setlrightValue] = useState(0);

  //better use service for all app, but for simple and add env variables with url value 
  useEffect(async () => {
    const r = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    setRates(r.data);
  }, []);
  // refactor logic or make own hooks for minimalize code
  function changeLeftValue(value) {
    if (rates.length) {
      const v1 = value / rates.find((v) => v.cc == leftCurrency).rate;
      const res = v1 * rates.find((v) => v.cc == rightCurrency).rate;
      setleftValue(value);
      setlrightValue(res);
    }
  }

  function changeRightValue(value) {
    if (rates.length) {
      const v1 = value / rates.find((v) => v.cc == rightCurrency).rate;
      const res = v1 * rates.find((v) => v.cc == leftCurrency).rate;
      setlrightValue(value);
      setleftValue(res);
    }
  }

  useEffect(() => {
    changeLeftValue(leftValue);
  }, [leftCurrency]);

  useEffect(() => {
    changeRightValue(rightValue);
  }, [rightCurrency]);

  return (
    <main className="main d-flex">
      <div className="section">
        <b className="d-flex">Конвертер валют</b>
        <div className="section-wrapper__converter">
          <div className="course-place">
            <span>Источник: </span>
            <a> По среднему банковскому курсу</a>
          </div>
          <div className="course-date">
            <span>Дата обновления: </span>
            <a>18.03.2022</a>
          </div>
          <div className="calcs-wrapper">
            {/* refactor the most simple variant */}
            <Calculator
              rates={rates}
              value={leftValue}
              currency={leftCurrency}
              onChangeValue={setleftValue}
              onChangeCurrency={setleftCurrency}
              onChangeValue={changeLeftValue}
            ></Calculator>
            <Calculator
              rates={rates}
              value={rightValue}
              currency={rightCurrency}
              onChangeValue={setlrightValue}
              onChangeCurrency={setrightCurrency}
              onChangeValue={changeRightValue}
            ></Calculator>
            <div className="converter-button_wrapper">
              <button className="converter-button">=</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Converter;
