
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
 * 基于百度地图的定位
 */

exports.getLocation =(callback)=>{
	let geolocation = new BMap.Geolocation();
	// 开启SDK辅助定位
	geolocation.enableSDKLocation();
	geolocation.getCurrentPosition(function(r){
		let point;
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			//console.log('您的位置：'+r.point.lng+','+r.point.lat);
			point = r.point;
		}
		callback(point)    
	}); 
}