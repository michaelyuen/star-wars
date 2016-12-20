import React from 'react';
import { Link } from 'react-router';

var style = {
	div: {
		background: '#212121',
		color: '#FFEB3B',
		display: 'flex', flexDirection: 'column', justifyContent: 'center',
		height: '30vh',
		textAlign: 'center'
	},
	h1: {
		marginBottom: 20
	},
	link: {
		color: 'inherit',
		textDecoration: 'none'
	},
	h6: {
		fontWeight: 300
	}
};

var Header = React.createClass({

	render: function(){
		return (
			<div style={style.div}>
				<h1 style={style.h1}><Link to={'/'} style={style.link}>{ this.props.title }</Link></h1>
				<h6 style={style.h6}>{ this.props.subtitle }</h6>
			</div>
		);
	}
});

export default Header