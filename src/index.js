import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Root from './routes';
import fb from '../firebase.config.js';
import Bazu from './app';

if(module.hot) module.hot.accept();

ReactDOM.render(<Root/>, document.getElementById('app'));
