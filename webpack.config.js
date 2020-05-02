const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
	context: path.resolve(__dirname,'src'),
	mode: 'development',
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		
	},
	devServer: {
		port: 8087
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
				
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: ['file-loader'],
				
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: ['file-loader'],
				
			},
			
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'service.html',
			template: './service.html'
		}),
		
		new CleanWebpackPlugin()
	]
};