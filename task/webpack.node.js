const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const NODE_MODULES = path.resolve('node_modules');
const config = require('./webpack.base.js');

function _externals() {
    let manifest = require('../package.json');
    let dependencies = manifest.dependencies;
    let externals = {};
    for (let p in dependencies) {
        externals[p] = 'commonjs ' + p;
    }
    return externals;
}

//let externals = _externals();


module.exports = {
	entry:{
		index:'./client/index/server.jsx',
		category:'./client/category/server.jsx',
		login:'./client/login/server.jsx'
	},
	output:{
		path: path.resolve(__dirname, '../dist/server'),
	    filename: 'bundle/[name].js',
	    libraryTarget: 'commonjs2'
	},
	target:'node',
	mode:'production',
	module:config.module,
	externals:_externals(),
	resolve: {
        extensions: ['.js','.jsx']
    },
    plugins:[
    	new CleanWebpackPlugin(['dist/server'],{
			root:path.resolve(__dirname, '..')
		})
    ]
}