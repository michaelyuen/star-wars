import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, hashHistory, Router, Route, IndexRoute, withRouter } from 'react-router';

import App from './app';
import List from './components/list/list.js';
import NoMatch from './components/nomatch/nomatch.js';

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path='/' component={App} />
		<Route path='/list/:category' component={App} />
		<Route path='*' component={NoMatch} />
	</Router>
), document.getElementById('app'));