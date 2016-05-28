import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Home from './components/Home.jsx';


module.exports = (
	<Route path='/' component={Home}>
		<IndexRoute component={Home}/>
	</Route>	
);