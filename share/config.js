"use strict";

const runtime = process.env["NODE_ENV"];

var config = {
	host:'https://wd.hnmall.com/',
	api:'https://wd.hnmall.com/',
	appid:'wxdbb96d20de9ed62a'
};


if(runtime === 'production'){
	config.host='https://www.hnmall.com/';
	config.api='https://www.hnmall.com/';
	config.appid='wx990c87a05d829cd0';
}

module.exports = config;