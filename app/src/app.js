import React from 'react';

import Header from './components/header/header.js';
import List from './components/list/list.js';

var App = React.createClass({

	getInitialState: function(){

		return { data: [] };
	},

	loadFromServer: function( url ){

		// fetch( url )
		// 	.then( function( res ){

		// 		return res.json();
		// 	})
		// 	.then( function( res ){

		// 		var resArray = Object.keys( res ).map(function( key ){
		// 			return { name: key, url: res[key] };
		// 		});
		// 		this.setState( { data: resArray } );

		// 	}.bind(this))
		// 	.catch( function( err ){
		// 		console.error( err );
		// 	});

		this.setState({
			data: [
				{ name: 'people'},
				{ name: 'planets'},
				{ name: 'films'},
				{ name: 'species'},
				{ name: 'vehicles'},
				{ name: 'starships'}
			]
		})
	},

	componentDidMount: function(){

		document.title = this.props.title;
		this.loadFromServer( this.props.baseUrl );
	},

	render: function(){
		return (
			<div>
				<Header title={this.props.title} />
				<List data={this.state.data} />
			</div>
		);
	}
});

export default App