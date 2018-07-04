
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

exports.getLocationTencent = (callback)=>{
	let cache = getCache('geolocation')||null;
	cache = JSON.parse(cache);
	if(cache && cache.time - Date.now > 0){
		return cache;
	}
	let geolocation = new qq.maps.Geolocation("PMOBZ-DSBK6-7NQSZ-EUK5J-A4PR6-DEB4V", "hnmall");
	geolocation.getLocation(function(res){
		let {lat,lng} = res;
		setCache('geolocation',JSON.stringify({lat,lng,time:Date.now()+86400000}))
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