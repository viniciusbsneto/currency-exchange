import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';

import CurrencyConversion from './pages/CurrencyConversion';
import Landing from './pages/Landing';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <Landing />
        <GlobalStyle />
      </StylesProvider>
    </>
  );
};

export default App;
