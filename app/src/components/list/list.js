import React from 'react';

import Item from '../item/item.js';

var style = {
	container: {
		background: '#303030'
	},
	list: {
		display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
		margin: 'auto',
		paddingTop: 50,
		width: '50vw', minHeight: '70vh'
	}
};

var List = React.createClass({

	render: function(){
		return (
			<div style={style.container}>
				<div style={style.list}>
					{this.props.data.map(function( item, i ){
						return <Item key={i} item={item} />
					})}
				</div>
			</div>
		);
	}
});

export default List