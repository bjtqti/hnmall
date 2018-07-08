const path = require('path');
const webpack = require('webpack')
const NODE_MODULES = path.resolve('node_modules');
const config = require('./config')
let entry = {};


config.pages.forEach((page)=>{
	entry[page] = `./client/${page}/index.jsx` 
})

module.exports = {
	entry:entry,
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