import React, {Component} from 'react'
import {isArray,distance,isWechat,fetchApi} from '../lib'
import LazyLoad from 'react-lazyload'
import {GPS_KEY} from '../common/constant.js'
import config from '../../share/config.js'

export default class Shop extends Component {
	 
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		import('swiper').then((m)=>{
			let Swiper = m.default;
			let store = this.refs.store;
			let slider = new Swiper(store, {
				slidesPerView:4,
				preloadImages:false
			});
		});
		this.getGeoLocation();
	}

	/**
	 * 微信sdk定位
	 */
	getLocationByWeixin (config) {	
		if(typeof wx === undefined) {
			return false;
		}
	    //配置信息appId,nonceStr,signature,timestamp
	    wx.config({
	        debug		: false,
	        appId		: config.appId,
	        timestamp	: config.timestamp,
	        nonceStr	: config.nonceStr,
	        signature	: config.signature,
	        jsApiList	: 	[	// 接口列表
	            'checkJsApi',
	            'openLocation',
	            'getLocation'
	        ]
	    });
	    let that = this;
	    let getNearStore = this.props.getNearStore;
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
	                            getNearStore(resArr);
	                        },
	                        fail:function(){
	                            console.log('error***weixin')
	                            that.tencentGelocation()
	                        }
	                    });
	                //} else {
	                   // callback();
	                //}
	            },
	            fail: function() {
	                //console.log('fail***')
	                that.tencentGelocation()
	            }
	        });
	    });
	}

	/**
	 * H5定位
	 */
	navigatorGeolocation() {
		let getNearStore = this.props.getNearStore;
		if ("geolocation" in navigator){
			navigator.geolocation.getCurrentPosition((res)=>{
	            console.log('ok',res)
				getNearStore({
					latitude:res.coords.latitude,
					longitude:res.coords.longitude,
					accuracy:res.coords.accuracy
				})
			},(err)=>{
				console.log(err);
				this.tencentGelocation()
			},{timeout:5000,maximumAge:60000})
		}else{
			this.tencentGelocation()
		} 
	}

	/**
	 * 腾讯地图定位
	 */
	tencentGelocation(){
	    let options = {timeout: 10000};
	    let getNearStore = this.props.getNearStore;
	    let geolocation = new qq.maps.Geolocation("PMOBZ-DSBK6-7NQSZ-EUK5J-A4PR6-DEB4V", "hnmall");
	    let success = function(rs){
	        //console.log(rs)
	        let position = {latitude:rs.lat,longitude:rs.lng,accuracy:rs.accuracy}
	        getNearStore(position)
	    }
	    let error = function(err){
	        //console.log(err,'tencentGelocation')
	        getNearStore();
	    }
	    geolocation.getLocation(success,error,options);
	}

	//获取位置信息
	getGeoLocation(){
		//let pos = {latitude:28.234589,longitude:112.913554};
		if(isWechat()){
			fetchApi('/index/weixin',{
				method:'POST',
				data: {url:encodeURIComponent(location.href)}
			}).then((data)=>{
				//console.log(data)
				//let {appId,nonceStr,signature,timestamp} = data;
				this.getLocationByWeixin(data)
			})
		}else{
			this.navigatorGeolocation()
		}

	}

	storePublicGoods(){
		let {shops} = this.props.index;
		let {host} = config;
		let list = [];
		if(!isArray(shops) || shops.length < 1) return '';
		shops.forEach((item)=>{
			//console.log(item.shop_id)
			item.store.forEach((g,i)=>{
				list.push(
					<div className="swiper-slide store-goods-item" key={i}>
						<a href={`${host}wap/prepare-item.html?shop_id=${item.shop_id}&item_id=${g.item_id}`}>
							<LazyLoad once height={80}><img src={g.image} className="img"/></LazyLoad>
							<span className="price">{`￥${g.price}`}</span>
						</a>
					</div>
				)
			})
		})
		return list;
	}

	nearStoreList(){
		let {shops,coords} = this.props.index;
		let {host} = config;
		let list = [];
		if(!isArray(shops) || shops.length < 1) return '';
		shops.forEach((item,i)=>{
			//console.log(item,coords)
			let way = distance(coords.latitude,coords.longitude,item.dimensions,item.longitude);
			list.push(
				<div className="flex shop-item" key={i}>
					<a className="shop-img" href={`${host}oto/shop-index.html?shop_id=${item.shop_id}`}>
					<LazyLoad once height={88}><img src={item.shopLogo} className="img"/></LazyLoad>
					</a>
						<div className="shop-info">
								<div className="flex flex-around">
									<span className="shop-name">{item.shop_name}</span>
									<i className="distance">距离{way}</i>
									<a className="shop-path" href={`${host}oto/shop-index.html?shop_id=${item.shop_id}`}>去这里<i className="iconfont icon-zuji"></i></a>
								</div>
								<div className="coupon">
									<a href={`${host}wap/s-coupon.html`}><span className="coupon-tag">领券</span>优惠券领取中心</a>
								</div>
						</div>
					
				</div>
			)
		});
		return list;
	}

	renderShopIcon(modules,shopId){
		let pic = [];
		for(let i = 0;i<modules.length;i++){
			let m = modules[i];
			if(m.widget === "shop_icon"){
				pic = m.params.pic;
				break;
			}
		}
		//console.log(modules)
		return pic.map((item,i)=>{
			return (
				<div className="grid-half" key={`icon_${i}`}>
					<a className="widget" href={`${item.h5link}?shop_id=${shopId}`}>
						<LazyLoad once height={120}><img src={item.image} className="img"/></LazyLoad>
					</a>
				</div>
			)
		})
	}

	render() {
		let {shops,modules} = this.props.index;
		let shopId = isArray(shops) ?  shops[0].shop_id : '';
		let {host} = config;
		return (
			<div className="near-store">
				<div className="store-title">
					<span>附近的微店</span>
					<a  className="store-link" href={`${host}oto/shop-list.html`}>
						<span>更多店铺</span><i className="iconfont icon-more"></i>
					</a>
				</div>
				<div className="store-list">
					{this.nearStoreList()}
				</div>
				<div className="store-title">
					<span>年度优惠套餐</span>
					<a  className="store-link" href={`${host}wap/prepare-index.html?shop_id=${shopId}`}>
						<span>更多</span><i className="iconfont icon-more"></i>
					</a>
				</div>
				<div className="line"></div>
				<div ref="store" className="store-goods swiper-container">
					<div className="swiper-wrapper">{this.storePublicGoods()}</div>
				</div>
				<div className="flex">
					{this.renderShopIcon(modules,shopId)}
				</div>
			</div>
		)
	}
}

