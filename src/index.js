import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import routes from './routes';
import fb from '../firebase.config.js';

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));
