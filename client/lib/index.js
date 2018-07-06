
/**
 * 货币格式
 */
exports.formatPrice = (price)=>{

	return parseFloat(price).toFixed(2)
}

exports.isWechat = ()=>{
	var ua = navigator.userAgent.toLowerCase();
	return /micromessenger/i.test(ua);
}

/**
 * 腾讯地图定位
 */
exports.getLocationTencent = (callback)=>{
	let cache = localCache('geolocation');
	if(cache){
		return cache;
	}
	let geolocation = new qq.maps.Geolocation("PMOBZ-DSBK6-7NQSZ-EUK5J-A4PR6-DEB4V", "hnmall");
	geolocation.getLocation(function(res){
		let {lat,lng} = res;
		localCache('geolocation',{lat,lng})
		callback(res)
	},function(){
		callback()
	})
}

/** 
 * 获取滚动条距离顶端的距离 
 * @return {}支持IE6 
 */  
exports.getScrollTop = () => {
	var scrollPos;
	if (window.pageYOffset) {
		scrollPos = window.pageYOffset;
	} else if (document.compatMode && document.compatMode != 'BackCompat') {
		scrollPos = document.documentElement.scrollTop;
	} else if (document.body) {
		scrollPos = document.body.scrollTop;
	}
	return scrollPos;
}

function setCache(name,data){
	localStorage.setItem(name,data);
}

function getCache(name){
	return localStorage.getItem(name);
}

function localCache (name,data) {
	//console.log(data,name)
	if(data){
		let _data = typeof(data) === 'string' ? data : JSON.stringify(data);
		setCache(name,_data);
		setCache(name+'_time',Date.now()+86400000)
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

exports.localCache = localCache;

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