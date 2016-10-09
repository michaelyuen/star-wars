import React from 'react';

var HelloWorld = React.createClass({
	render: function() {
		return (
			<p>Hello, {this.props.greetTarget}!</p>
		);
	}
});

export default HelloWorld