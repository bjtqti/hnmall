'use strict'
const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const InjectHtmlPlugin = require('inject-html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const config = require('./webpack.base.js');

config.mode = 'production';
config.module.rules.push({
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

config.optimization = {
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
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                chunks:'all'
            }
        }
    }
}

module.exports = merge(config,{
	mode:'production',
	plugins:[
		new CleanWebpackPlugin(['dist/client'],{
			root:path.resolve(__dirname, '..')
		}),
		new MiniCssExtractPlugin({
	      // Options similar to the same options in webpackOptions.output
	      // both options are optional
	      	filename: "css/[name]-[hash:8].css"
	    }),
		new InjectHtmlPlugin({
			filename:'./server/views/index.html',
            chunks:['manifest','vendors','index']
		})
	]
});