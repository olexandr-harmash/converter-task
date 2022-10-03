import React, { useContext } from 'react';
import hcss from './header.css';
import logo from './privat_bank_logo.png';
import { AppContext } from '../../context/russian';

function Header() {
  const { LanguageContext } = useContext(AppContext);
  //simple language-switch realization
  return (
    <header className="header">
      <div className="header-top d-flex">
        <div className="header-wrapper d-flex">
          <div className="header-top__bonus">
            <span>%</span>
            <a href="#">{LanguageContext.russian.header.bonus}</a>
          </div>
          <a className="logo" href="#">
            <img src={logo} />
          </a>
          <div className="header-top__profile">
            <a className="lang-switcher" href="#">
              русский
            </a>
            <div className="auth">
              <div className="auth-toggle">{LanguageContext.russian.header.login}</div>
              {/* auth component */}
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="d-flex header-bottom__menues">
          <div className="header-bottom__top">
            <div className="menu d-flex">
              {LanguageContext.russian.buttom_header_top_russian_elements.map((text, index) => (
                <div className="menu__item" key={index}>
                  <a className="menu__link">{text}</a>
                </div>
              ))}
            </div>
          </div>
          <div className="header-submenu">
            <div className="submenu-container">
              <ul className="nav">
                {LanguageContext.russian.buttom_header_bottom_russian_elements.map(
                  (text, index) => (
                    <li className="nav-item" key={index}>
                      <a className="nav-link">{text}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        {/* header bottom */}
      </div>
    </header>
  );
}

export default Header;
