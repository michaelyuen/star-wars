module.exports = {
	entry: './app/src/app.jsx',
	output: {
		path: './app/dist',
		publicPath: '/app/dist/',
		filename: 'bundle.js'
	},
	watch: true,
	devServer: {
		inline: true
	},
	module: {
		loaders: [{
			test: /\.(jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			}
		}]
	},
	resolve: {
		extensions: ['', '.js']
	}
};