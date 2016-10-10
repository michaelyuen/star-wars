import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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

	getChildContext: function(){
		return { muiTheme: getMuiTheme( baseTheme ) };
	},

	componentDidMount: function(){

		document.title = this.props.title;
		this.loadFromServer( this.props.baseUrl );
	},

	render: function(){

		return (
			<div>
				<h1>{this.props.title}</h1>
				<GridList
					cols={3}
				>
					{this.state.data.map(function( value, i ){
						return (
							<GridTile
								key={i}
							>
								{value.name}
							</GridTile>
						);
					})}
				</GridList>
			</div>
		);
	}
});

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default App