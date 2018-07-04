
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
	let geolocation = new qq.maps.Geolocation("PMOBZ-DSBK6-7NQSZ-EUK5J-A4PR6-DEB4V", "hnmall");
    let options = {timeout: 8000};
	geolocation.getLocation(function(res){
		callback(res)
	},function(){
		callback()
	}, options)
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