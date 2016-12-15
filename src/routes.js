import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { requireAuth, isAuth } from './utils/authApi';

import Bazu from './app';
import Login from './Login/Login';
import Contacts from './Contacts/Contacts';
import History from './History/History';
import Profile from './Profile/Profile';


export default class Root extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="login" component={Login} onEnter={isAuth}/>
        <Route path="/" component={Bazu} onEnter={requireAuth}>
          <IndexRoute component={Contacts}/>
          <Route path="history" component={History}/>
          <Route path="profile" component={Profile}/>
        </Route>
      </Router>
    );
  }
}
