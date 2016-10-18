import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Bazu from './app';
import Login from './Login/login';
import Contacts from './Contacts/contacts.js';

const routes = (
  <Router history={browserHistory}>
    <Route path="login" component={Login}/>
    <Route path="/" component={Bazu}>
      <IndexRoute component={Contacts}/>
    </Route>
  </Router>
);

export default routes;
