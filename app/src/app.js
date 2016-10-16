import React from 'react';
import render from 'react-dom'
import update from 'react-addons-update';

import Header from './components/header/header.js';
import List from './components/list/list.js';

var App = React.createClass({

	getInitialState: function(){

		this.title = 'Star Wars';
		this.baseUrl = 'http://swapi.co/api/';

		var data = {
			resources: [],
			people: [],
			planets: [],
			films: [],
			species: [],
			vehicles: [],
			starships: []
		};

		data.resources = this.getResources( this.baseUrl );

		return { data: data };
	},

	getResources: function( url ){

		// fetch( url )
		// 	.then( function( res ){

		// 		return res.json();
		// 	})
		// 	.then( function( res ){

		// 		var resArray = Object.keys( res ).map(function( key ){
		// 			return { name: key, url: res[key] };
		// 		});
		// 		var data = { resources: resArray };
		// 		this.setState( { data: data } );

		// 	}.bind(this))
		// 	.catch( function( err ){
		// 		console.error( err );
		// 	});

		var resources = [
			{ name: 'people', url: "http://swapi.co/api/people/"},
			{ name: 'planets', url: "http://swapi.co/api/planets/"},
			{ name: 'films', url: "http://swapi.co/api/films/"},
			{ name: 'species', url: "http://swapi.co/api/species/"},
			{ name: 'vehicles', url: "http://swapi.co/api/vehicles/"},
			{ name: 'starships', url: "http://swapi.co/api/starships/"}
		];

		return resources;
	},

	loadFromServer: function( category ){

		if( category ){

			var url = this.state.data.resources.find(function( value ){
				return ( category === value.name );
			}).url;

			fetch( url )
				.then( function( res ){

					return res.json();
				})
				.then( function( res ){

					var newData = update( this.state.data, {
						[category]: { $push: res.results }
					});

					this.setState( { data: newData } );

				}.bind(this))
				.catch( function( err ){

					console.error( err );
				});
		}
	},

	componentDidMount: function(){

		document.title = this.title;
		this.loadFromServer( this.props.params.category );
	},

	componentWillReceiveProps: function( nextProps ){

		this.loadFromServer( nextProps.params.category );
	},

	render: function(){

		var data;

		if( this.props.params.category ){

			data = this.state.data[ this.props.params.category ];
		}
		else{

			data = this.state.data.resources;
		}

		return (
			<div>
				<Header title={this.title} />
				<List data={data} />
			</div>
		);
	}
});

export default App