import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

ReactDOM.render(
	<App title="Star Wars" baseUrl="http://swapi.co/api/" />,
	document.getElementById('app')
);