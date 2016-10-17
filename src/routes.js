import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Bazu from './app';
import Login from './Login/login';

const routes = (
  <Router>
    <Route path="/" component={Bazu}>
    <IndexRoute component={Login}/>

    </Route>
  </Router>
);

export default routes;
