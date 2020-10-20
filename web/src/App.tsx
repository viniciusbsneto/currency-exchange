import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </StylesProvider>
    </>
  );
};

export default App;
