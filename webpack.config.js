var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
	'./src/styles/index.less',
	'./src/index.jsx',
	'webpack-dev-server/client?http://localhost:8080'
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'public')
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			'Promise': 'exports?global.Promise!es6-promise',
			'fetch': 'exports?self.fetch!whatwg-fetch'
		})
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				include: [
					path.resolve(__dirname, 'src'),
				]
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: 'style!css!autoprefixer!less'
			}
		]
	},
	devServer: {
        contentBase: path.resolve(__dirname, 'public') 
    }
};