module.exports = {
	entry: './app/src/main.js',
	output: {
		path: './app/dist',
		publicPath: '/app/dist/',
		filename: 'bundle.js'
	},
	watch: true,
	devServer: {
		inline: true,
		port: 3000
	},
	module: {
		loaders: [{
			test: /\.(js)$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},
	resolve: {
		extensions: ['', '.js']
	}
};