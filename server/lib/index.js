let React = require('react')
let ReactDOMServer = require('react-dom/server')
let axios = require('axios');
let {resolve} = require('path')

exports.markupOfRoute = (route, initialState, ctx) => {
	let creatApp = require(resolve('dist', 'server', 'bundle',`${route}.js`)).default
	return creatApp(initialState).then(({app}) => {
		return ReactDOMServer.renderToString(app)
	})
}

exports.request = (url,data={},method="post") => {
	return axios({
		baseURL:'https://www.hnmall.com/',
		timeout: 30000,
		method,
		url,
		data:{format:'json',v:'v1',...data}
	});
}