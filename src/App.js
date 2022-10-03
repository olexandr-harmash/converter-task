import React, { useEffect } from 'react';
import Header from './components/header/header.jsx';
import Converter from './components/converter/converter.jsx';
import css from './App.css';
import Footer from './components/footer/footer.jsx';
import { AppContext } from './context/russian';
import { LanguageContext } from './models/languages';
import CurrencyService from './services/currency';
import { useState } from 'react';

function App() {
  return (
    <AppContext.Provider
      value={{
        LanguageContext
      }}
    >
      <div className="App">
        <Header />
        <Converter />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
