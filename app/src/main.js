import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './app';

ReactDOM.render(
	<div>
		<HelloWorld greetTarget="Batman"/>
		<HelloWorld greetTarget="Iron Man"/>
		<HelloWorld greetTarget="Json Bourne"/>
		<HelloWorld greetTarget="Megatronious"/>
		<HelloWorld greetTarget="Dom Johnson"/>
		<HelloWorld greetTarget="She Hulk"/>
	</div>,
	document.getElementById('app')
);