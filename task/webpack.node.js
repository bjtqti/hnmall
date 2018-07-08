const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const NODE_MODULES = path.resolve('node_modules');
const base = require('./webpack.base.js');
const config = require('./config')

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
let entry = {};
config.pages.forEach((page)=>{
	entry[page] = `./client/${page}/server.jsx`
})

module.exports = {
	entry:entry,
	output:{
		path: path.resolve(__dirname, '../dist/server'),
	    filename: 'bundle/[name].js',
	    libraryTarget: 'commonjs2'
	},
	target:'node',
	mode:'production',
	module:base.module,
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