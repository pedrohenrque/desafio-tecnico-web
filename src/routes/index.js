import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Movies from '../pages/Movies';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/movies:id+" component={Movies} />
  </Switch>
);

export default Routes;
