import React from 'react';
import css from './footer.css';
import markets from './markets.png';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer__content">
          <div className="footer__left">
            <a className="footer__logo">PrivateBank</a>
            <div className="footer__feedback">
              <form className="footer__search search" action="">
                <span className="search__icon">@</span>
                <input className="search__input" type="text" />
                <button className="btn_variant_secondary btn">Поиск</button>
              </form>
              <div className="footer__report-btn report">
                <button className="btn_variant_secondary btn">Уведомить об ошибке</button>
              </div>
            </div>

            <div className="footer__socials"></div>
            <div className="footer__apps">
              <p className="apps__title">Приложение PrivatBank</p>
              <div className="apps__links">
                <img className="apps__links-image" src={markets} alt="" />
              </div>
            </div>
          </div>
          <div className="footer__right">
            <div>
              <button className="dropdown__btn">Финансы</button>
              <div className="dropdown__menu">
                  {/* only for example */}
                <a class="dropdown__item" href="/ua/currency/" target="_self">
                  Курс валют
                </a>
                <a class="dropdown__item" href="/ua/currency/" target="_self">
                  Курс валют
                </a>
                <a class="dropdown__item" href="/ua/currency/" target="_self">
                  Курс валют
                </a>
                <a class="dropdown__item" href="/ua/currency/" target="_self">
                  Курс валют
                </a>
                <a class="dropdown__item" href="/ua/currency/" target="_self">
                  Курс валют
                </a>
                <a class="dropdown__item" href="/ua/currency/" target="_self">
                  Курс валют
                </a>
                <a class="dropdown__item" href="/ua/currency/" target="_self">
                  Курс валют
                </a>
                <a class="dropdown__item" href="/ua/currency/" target="_self">
                  Курс валют
                </a>
                <a class="dropdown__item" href="/ua/currency/" target="_self">
                  Курс валют
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright"></div>
      </div>
    </footer>
  );
}

export default Footer;
