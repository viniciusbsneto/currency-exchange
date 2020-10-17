import React from 'react';
import CurrencyConversion from './pages/CurrencyConversion';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <CurrencyConversion />
      <GlobalStyle />
    </>
  );
};

export default App;
