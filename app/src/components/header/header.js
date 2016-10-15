import React from 'react';

var style = {
	div: {
		background: '#263238',
		display: 'flex', flexDirection: 'column', justifyContent: 'center',
		height: '30vh'
	},
	h1: {
		color: '#FFFF00',
		textAlign: 'center'
	}
};

var Header = React.createClass({

	render: function(){
		return (
			<div style={style.div}>
				<h1 style={style.h1}>{ this.props.title }</h1>
			</div>
		);
	}
});

export default Header