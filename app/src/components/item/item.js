import React from 'react';
import { Link } from 'react-router';

var style = {
	itemContainer: {
		display: 'flex', justifyContent: 'center', flexBasis: '33.33%',
		textAlign: 'center'
	},
	link: {
		textDecoration: 'none',
		color: '#FFEB3B',
		fontWeight: '300'
	},
	item: {
		background: '#424242',
		boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
		display: 'flex', flexDirection: 'column', justifyContent: 'center',
		marginBottom: 40,
		textAlign: 'center',
		width: 175, height: 175
	}
};

var Item = React.createClass({

	render: function(){
		return (
			<div style={style.itemContainer}>
				<Link to={'/list/' + this.props.item.name} style={style.link}>
					<div style={style.item}>{ this.props.item.name }</div>
				</Link>
			</div>
		);
	}
});

export default Item