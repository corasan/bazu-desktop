import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { requireAuth, isAuth } from './utils/authApi';

import Bazu from './app';
import Login from './Login/Login';
import Contacts from './Contacts/Contacts.js';

const routes = (
  <Router history={browserHistory}>
    <Route path="login" component={Login} onEnter={isAuth}/>
    <Route path="/" component={Bazu} onEnter={requireAuth}>
      <IndexRoute component={Contacts}/>
    </Route>
  </Router>
);

export default routes;
