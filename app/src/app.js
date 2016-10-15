import React from 'react';

var App = React.createClass({

	getInitialState: function(){

		return { data: [] };
	},

	loadFromServer: function( url ){

		fetch( url )
			.then( function( res ){

				return res.json();
			})
			.then( function( res ){

				var resArray = Object.keys( res ).map(function( key ){
					return { name: key, url: res[key] };
				});
				this.setState( { data: resArray } );

			}.bind(this))
			.catch( function( err ){
				console.error( err );
			});
	},

	componentDidMount: function(){

		document.title = this.props.title;
		this.loadFromServer( this.props.baseUrl );
	},

	render: function(){

		return (
			<div>
				<h1>{this.props.title}</h1>
			</div>
		);
	}
});

export default App