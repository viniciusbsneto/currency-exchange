import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import CurrencyConversion from './pages/CurrencyConversion';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <CurrencyConversion />
        <GlobalStyle />
      </StylesProvider>
    </>
  );
};

export default App;
