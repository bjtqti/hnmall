"use strict";

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

/**
 *
 * 判断是否是微信访问
 */
exports.isWechat = ()=>{
	var ua = navigator.userAgent.toLowerCase();
	return /micromessenger/i.test(ua);
}

/**
 * H5定位
 */
exports.navigatorGeolocation = (callback)=>{
	if ("geolocation" in navigator){
		navigator.geolocation.getCurrentPosition((res)=>{
            //console.log('ok',res)
			callback({
				latitude:res.coords.latitude,
				longitude:res.coords.longitude,
				accuracy:res.coords.accuracy
			})
		},(err)=>{
			console.log(err);
			tencentGelocation(callback)
		},{timeout:5000,maximumAge:60000})
	}else{
		tencentGelocation(callback)
	} 
}

/**
 * 腾讯地图定位
 */
function tencentGelocation(callback){
    let options = {timeout: 8000};
    let geolocation = new qq.maps.Geolocation("PMOBZ-DSBK6-7NQSZ-EUK5J-A4PR6-DEB4V", "hnmall");
    let success = function(rs){
        //console.log(rs)
        let position = {latitude:rs.lat,longitude:rs.lng,accuracy:rs.accuracy}
        callback(position)
    }
    let error = function(err){
        console.log(err)
        callback();
    }
    geolocation.getLocation(success,error,options);
}

/**
 * 插入一个js脚本
 */
exports.appendScript = (src)=>{
    let script = document.createElement('script'); 
    let head = document.getElementsByTagName('head')[0]; 
    script.type = 'text/javascript'; 
    //weixin.async = true; 
    script.src = src;
    head.appendChild(script);
}

/**
 * 微信sdk定位
 */
exports.getLocationByWeixin = (config,callback)=>{	
	if(typeof wx === undefined) callback();
    //配置信息appId,nonceStr,signature,timestamp
    wx.config({
        debug		: false,
        appId		: config.appId,
        timestamp	: config.timestamp,
        nonceStr	: config.nonceStr,
        signature	: config.signature,
        jsApiList	: 	[	// 接口列表
            'checkJsApi',
            //'openLocation',
            'getLocation'
        ]
    });

    //通过ready接口处理成功验证
    wx.ready(function(){
        //判断当前客户端版本是否支持指定JS接口
        wx.checkJsApi({	// 需要检测的JS接口列表
            jsApiList: [
                'getLocation'
            ],
            success: function(result) {
                // 以键值对的形式返回，可用的api值true，不可用为false
                //console.log(result)
                // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                //if (result.checkResult.getLocation == true){
                    //微信接口获取成功
                    wx.getLocation({
                        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                        success: function (res) {
                            //console.log(res,'***ok')
                            var resArr = {
                                // 纬度，浮点数，范围为90 ~ -90
                                latitude: res.latitude,
                                // 经度，浮点数，范围为180 ~ -180
                                longitude: res.longitude,
                                // 速度，以米/每秒计
                                speed: res.speed,
                                // 位置精度
                                accuracy: res.accuracy,
                            };
                            callback(resArr);
                        },
                        fail:function(){
                            //console.log('error***weixin')
                            tencentGelocation(callback)
                        }
                    });
                //} else {
                   // callback();
                //}
            },
            fail: function() {
                //console.log('fail***')
                tencentGelocation(callback)
            }
        });
    });
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
		setCache(name+'_time',Date.now()+exp*24*60*60*1000)
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
    return import('axios').then((m)=>{
        //console.log(m)
        let axios = m.default;
        //let axios = require('axios').default;
        let config = {
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
    })
}

exports.parseUrl = function(name){
    let url = window.location.search;
    let query = url.replace('?','').split('&');
    let code = '';
    for(let i = 0 ;i <query.length;i++){
        let path = query[i].split('=');
        if(path[0]===name){
            code = path[1];
            break;
        }
    }
    return code;
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


/**
 * 微信分享
 */
exports.wxShare = (config={},callback)=>{  
    if(typeof wx === undefined) callback();
    //配置信息appId,nonceStr,signature,timestamp
    let {agentid,title,desc,imgUrl,link,type} = config;
    wx.config({
        debug       : false,
        appId       : config.appId,
        timestamp   : config.timestamp,
        nonceStr    : config.nonceStr,
        signature   : config.signature,
        jsApiList   : [   // 接口列表
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone'
        ]
    });
    var checkAgentId=function(url){
        var str = url.split('?');
        var result = false;
        if(str.length<2||str[1]===''){
            return result;
        }
        var arr = str[1].split('&');
        for(var i=0,length=arr.length;i<length;i++){
            if(arr[i].indexOf('agentid')!== -1){
                result = true;
            }
        }
        return result;
    }
    if(!checkAgentId(link)){
        if(link.indexOf('?')!== -1){
            link = link+'&agentid='+agentid;
        }else{
            link = link+'?agentid='+agentid;
        }
    }
    const shareConfig = {
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接
        imgUrl:imgUrl, // 分享图标
        success: function() {
            console.log('ok')
            // 用户确认分享后执行的回调函数
            callback&&callback({
                type :type||'news',
                title:title,
                link:link,
                desc:desc
            });
        },
        fail:function(err){
            console.log('err',err)
        },
        cancel: function() {
            // 用户取消分享后执行的回调函数
            //isFunction(opt.cancel)&&opt.cancel();
        }
    }

    //通过ready接口处理成功验证
    wx.ready(function(){
        //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
        wx.onMenuShareTimeline(shareConfig);
        //获取“分享给朋友”按钮点击状态及自定义分享内容接口
        wx.onMenuShareAppMessage(shareConfig);
        //获取“分享到QQ”按钮点击状态及自定义分享内容接口
        wx.onMenuShareQQ(shareConfig);
        //获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
        wx.onMenuShareWeibo(shareConfig);
        //获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
        wx.onMenuShareQZone(shareConfig);
    });
}