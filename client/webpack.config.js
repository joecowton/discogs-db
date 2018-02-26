var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				use: ['style-loader', 'css-loader'],
				test: /\.css$/
			}
		]
	}
};
