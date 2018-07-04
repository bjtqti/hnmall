const path = require('path');
const webpack = require('webpack')
const NODE_MODULES = path.resolve('node_modules');


module.exports = {
	entry:{
		index:'./client/index/index.jsx'
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
		    	test:/\.(png|jpg|svg|gif)$/,
		    	loader:'file-loader',
		    	options:{
		    		outputPath:'images/'
		    	}
		    }
		]
	},
	resolve: {
        extensions: ['.js','.jsx']
    }
}