import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router} from 'react-router';
import routes from './routes.jsx';

var bodyMount = document.getElementById('body-mount-point');

ReactDOM.render(
    <Router history={browserHistory} >
        {routes}
    </Router>
, bodyMount);