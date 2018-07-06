const path = require('path');
const webpack = require('webpack')
const NODE_MODULES = path.resolve('node_modules');


module.exports = {
	entry:{
		index:'./client/index/index.jsx',
		category:'./client/category/index.jsx',
		login:'./client/login/index'
	},
	output:{
		path: path.resolve(__dirname, '../dist/client'),
	    filename: 'js/[name]-[hash:8].js',
	    chunkFilename: "js/[name]-[hash:8].js",
	    publicPath:'/'
	},
	module:{
		rules:[
			{
		        test: /\.(jsx?)$/,
		        loader: 'babel-loader',
		        exclude:[NODE_MODULES]
		    },
		    {
		    	test:/\.(png|jpg|svg|gif)$/i,
		    	loader:'url-loader',
		    	options:{
		    		limit: 8190,
		    		name:"[name].[ext]",
		    		outputPath:'images/'
		    	}
		    }
		]
	},
	resolve: {
        extensions: ['.js','.jsx']
    }
}