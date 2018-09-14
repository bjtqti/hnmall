"use strict";

/**
 *
 * 判断是否是微信访问
 */
exports.isWechat = ()=>{
	var ua = navigator.userAgent.toLowerCase();
	return /micromessenger/i.test(ua);
}
 
/** 
 * 获取滚动条距离顶端的距离 
 */  
exports.getScrollTop = () => {
    var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;　　
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;　　
    }　　
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;　　
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;　　
    return scrollTop;
}

/**
 * 获取滚动区高度
 */
exports.getScrollHeight = ()=>{
    var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0;　　
    if (document.body) {　　　　
        bodyScrollHeight = document.body.scrollHeight;　　
    }　　
    if (document.documentElement) {　　　　
        documentScrollHeight = document.documentElement.scrollHeight;　　
    }　　
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;　　
    return scrollHeight;
}

function setCache(name,data){
	localStorage.setItem(name,data);
}

function getCache(name){
	return localStorage.getItem(name);
}

 
/**
 * 缓存
 */
exports.localCache = (name,data,exp=1)=> {
	//console.log(data,name)
	if(data){
		let _data = typeof(data) === 'string' ? data : JSON.stringify(data);
		setCache(name,_data);
		setCache(name+'_time',Date.now()+exp*1000)
	}else{
		let time = getCache(name+'_time');
		let res;
		if(Date.now()-time>0) {
			return false
		}
		let rs = getCache(name);
		try{
			res = JSON.parse(rs)
		}catch(err){
			res = rs;
		}
		return res;
	}
}


exports.setCookie=function(c_name,value,expiredays,path,domain){
    let expdate = new Date();
    let cookieText = c_name + "=" + escape(value);
    expdate.setDate(expdate.getDate() + expiredays);
    if(expiredays){
        cookieText +=";expires=" + expdate.toGMTString();
    }
    if(path){
        cookieText += ";path="+path;
    }
    if(domain){
        cookieText += ';domain='+domain
    }
    console.log(cookieText)
	document.cookie = cookieText;
}


/**
 * 根据经伟度计算距离
 */
exports.distance = (lat1, lng1, lat2, lng2)=>{
    // 如果参数错误，返回空字符
    let toRad = function (d) {
        return d * Math.PI / 180;
    }
    if(!lat1 || !lng1 || !lat2 || !lng2) return '';
    // 圆周率整除
    let radLat1 = toRad(lat1);
    let radLat2 = toRad(lat2);
    let a = radLat1 - radLat2;
    let b = toRad(lng1) - toRad(lng2);
    // 通过计算得到两个点相对于地球中心点的比例
    let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    // 通过比例达到两点之间的距离
    s = s * 6378137;
    // 如果大于1000，那么取千米
    if(s>1000){
        s = s/10;
        s = parseInt(s);
        return (s/100)+'千米';
    }
    // 距离仅保留两位小数
    s = Math.round(s * 100) / 100;
    return s+'米'
}


/**
 * 节流函数
 */
exports.throttle = function (func, wait){
    let timeout,
      context,
      args,
      startTime = Date.now();
  
    return function(){
        let curTime = Date.now();
        let remaining = wait - (curTime - startTime);
        context = this;
        args = arguments;
        //console.log(remaining)
        clearTimeout(timeout);
        
        if(remaining <= 0){
          func.apply(context, args);
          startTime = Date.now();
        }else{
          timeout = setTimeout(func, remaining);
        }
    }
}

exports.fetchApi = function(url,options={}){
    let config = {
        timeout:30000,
        headers: {
            'Content-Type': 'application/json'
       },
       ...options
    }
    return import('axios').then((m)=>{
        let Axios = m.default;
        return Axios(url,config).then((res)=>{
            //if(res.status===200){
                return res.data
            //}
        })
    })
}

 
/**
 * 生成随机串
 */
exports.createNonceStr = function (n=32) {
  //return Math.random().toString(36).substr(2);
    let chars = 'ABCDEFGHJKMNPQRSTWXYZLOVUIabcdefhijkmnpolurstwxyz12345678';
    let max = chars.length;
    let str = '';
　　for (let i = 0; i < n; i++) {
        str += chars.charAt(Math.floor(Math.random() * max));
　　}
    return str;
}

/**
 * 判断是否为有效的手机号码
 */

exports.checkphone = function (str){
  return !!(/^1(3|4|5|7|8)\d{9}$/.test(str));
}

/**
 * 判断是否为对象
 */
exports.isObject =(o)=>{
  return Object.prototype.toString.call(o)=='[object Object]';
}

/**
 * 判断是否为数组类型
 */
exports.isArray =(o)=>{
  return Object.prototype.toString.call(o)=='[object Array]';
}

 
exports.platform = {
        isAndroid: function() {
            return navigator.userAgent.match(/Android/i) ? true : false;
        },
        isIOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
        },
        isWx : function() {
            return navigator.userAgent.match(/micromessenger/i) ? true : false;
        },
        isQQ:function(){
            return navigator.userAgent.match(/QQ/i) ? true : false;
        }
}


