import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import CurrencyConversion from '../pages/CurrencyConversion';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/currency-conversion" component={CurrencyConversion} />
    </Switch>
  );
};

export default Routes;
