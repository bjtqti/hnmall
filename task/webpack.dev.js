'use strict'
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.base.js');
const ip = require('ip') 
const webpack = require('webpack')

config.module.rules.push({
	test:/\.css$/,
	use: [
	    'style-loader',
	    { loader: 'css-loader', 
	    	options: { 
		    	import:true,
                importLoaders: 1 
            } 
        },
	    'postcss-loader'
	]
})

module.exports = merge(config,{
	mode:'development',
	devtool: 'inline-source-map',
	devServer: {
		//https: true,
		contentBase: path.join(__dirname, "../dist"),
		compress: true,
		historyApiFallback:true,
		open:true,
		inline:true,
		hot:true,
		host:ip.address(),
		port: 9000,
	  	proxy:{
		  	'/':{
		  		target:'http://'+ip.address()+':3000',
			  	changeOrigin:true,
			  	secure:false
		  	}
	  	}
	},
	plugins:[
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename:'index.html',
		  	template:'./client/index/index.html',
		  	inject: true,
		  	chunks:['manifest','vendors','index'],
		  	minify:false
		}),
		new HtmlWebpackPlugin({
			filename:'category.html',
		  	template:'./client/category/index.html',
		  	chunks:['manifest','vendors','category'],
		  	inject: true,
		  	minify:false
		})
	]
});