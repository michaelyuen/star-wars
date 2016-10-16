import React from 'react';
import { Link } from 'react-router';

var style = {
	itemContainer: {
		display: 'flex', justifyContent: 'center', flexBasis: '33.33%',
		textAlign: 'center'
	},
	item: {
		background: '#FFF59D',
		display: 'flex', flexDirection: 'column', justifyContent: 'center',
		marginBottom: '50px',
		textAlign: 'center',
		width: 250, height: 250
	}
};

var Item = React.createClass({

	render: function(){
		return (
			<div style={style.itemContainer}>
				<Link to={'/list/' + this.props.item.name}>
					<div style={style.item}>{ this.props.item.name }</div>
				</Link>
			</div>
		);
	}
});

export default Item