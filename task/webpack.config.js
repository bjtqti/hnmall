'use strict'
const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const InjectHtmlPlugin = require('inject-html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const base = require('./webpack.base.js');
const config = require('./config')
let plugins = [];
config.pages.forEach((page)=>{
	plugins.push(new InjectHtmlPlugin({
		filename:`./server/views/${page}.html`,
        chunks:['manifest','vendors',page]
	}))
})

base.output.publicPath = '/';
base.mode = 'production';
base.module.rules.push({
	test:/\.css$/,
	use: [
		MiniCssExtractPlugin.loader,
	    //'style-loader',
	    { loader: 'css-loader', 
	    	options: { 
		    	import:true,
		    	minimize:true,
                importLoaders: 1
            } 
        },
	    'postcss-loader'
	]
})

base.optimization = {
    minimizer:[
        new UglifyJsPlugin({
	        cache: true,
	        parallel: true,
	        sourceMap: true // set to true if you want JS source maps
	    })
    ],
	runtimeChunk: {
        name: "manifest"
    },
    splitChunks:{
    	cacheGroups: {
            vendor: {
            	minChunks: 2,
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                chunks:'all'
            }
        }
    }
}

module.exports = merge(base,{
	mode:'production',
	plugins:[
		new CleanWebpackPlugin(['js','css','images'],{
			root:path.resolve(__dirname, '../dist/client')
		}),
		new MiniCssExtractPlugin({
	      // Options similar to the same options in webpackOptions.output
	      // both options are optional
	      	filename: "css/[name]-[hash:8].css"
	    })
	].concat(plugins)
});