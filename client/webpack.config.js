var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
	'axios',
	'babel-preset-stage-2',
	'enzyme',
	'lodash',
	'materialize-css',
	'react',
	'react-dom',
	'react-player',
	'react-redux',
	'react-router',
	'react-router-dom',
	'react-stripe-checkout',
	'redux',
	'redux-form',
	'redux-mock-store',
	'redux-thunk'
];

module.exports = {
	entry: {
		bundle: './src/index.js',
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash]js'
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
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'manifest']
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
};
