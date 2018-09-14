let {resolve} = require('path')
let React = require('react')
let ReactDOMServer = require('react-dom/server')
let axios = require('axios').default;
let cfg = require('../../share/config.js');

exports.markupOfRoute = (route, initialState, ctx) => {
	let creatApp = require(resolve('dist', 'server', 'bundle',`${route}.js`)).default
	return creatApp(initialState).then(({app}) => {
		return ReactDOMServer.renderToString(app)
	})
}

exports.fetchApi = (url,options={})=>{
    let config = {
    	baseURL:cfg.host,
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

/**
 * 获取全路径
 */
exports.getUri = (path)=>{
    return path.replace(/^\//,cfg.host)
}

/**
 * 货币格式
 * n 要格式化的数字
 * r 要保留的位数
 */
exports.formatPrice = (n,r=2)=>{
    let str = typeof n === 'string' ? n:  n.toString();
    let arr = str.split('.');
     
    if(arr[1]){
        let a = arr[1];
        let b = '';
        for(let i=0;i<r;i++){
            b += a[i] ? a[i] : '0';
        }
        arr[1] = b;
    }else{
        arr[1] = '00';
    }
    return `${arr[0]}.${arr[1]}`;
}