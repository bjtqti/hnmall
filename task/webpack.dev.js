'use strict'
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.js');
const ip = require('ip') 
const webpack = require('webpack')
const config = require('./config');
let plugins = [];

//config.pages = ['goodsdetail']

config.pages.forEach((page)=>{
	plugins.push(
		new HtmlWebpackPlugin({
			filename:`${page}.html`,
		  	template:`./client/${page}/index.html`,
		  	chunks:['manifest','vendors',page],
		  	inject: true,
		  	minify:false
		})
	)
})

base.module.rules.push({
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

module.exports = merge(base,{
	mode:'development',
	devtool: 'inline-source-map',
	devServer: {
		https: true,
		contentBase: "/",
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
		new webpack.HotModuleReplacementPlugin()
	].concat(plugins)
});