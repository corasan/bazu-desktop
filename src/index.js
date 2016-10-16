import React from 'react';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));
