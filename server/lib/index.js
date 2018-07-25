let React = require('react')
let ReactDOMServer = require('react-dom/server')
let {resolve} = require('path')

exports.markupOfRoute = (route, initialState, ctx) => {
	let creatApp = require(resolve('dist', 'server', 'bundle',`${route}.js`)).default
	return creatApp(initialState).then(({app}) => {
		return ReactDOMServer.renderToString(app)
	})
}

exports.fetchApi = (url,options={})=>{
	let axios = require('axios').default;
    let config = {
    	baseURL:'https://www.hnmall.com/',
        timeout:30000,
        headers: {
            'Content-Type': 'application/json'
       },
       ...options
    }
    return axios(url,config).then((res)=>{
        //console.log(res)
        //if(res.status===200){
            return res.data
        //}
    })
}