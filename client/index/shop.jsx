import React, {Component} from 'react'
import {formatPrice,isArray,distance} from '../lib'
import LazyLoad from 'react-lazyload'
import {BASE_HOST} from '../common/constant';
//import {localCache} from '../lib'

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
		})
	}

	storePublicGoods(){
		let {shops} = this.props.index;
		let list = [];
		if(!isArray(shops) || shops.length < 1) return '';
		shops.forEach((item)=>{
			//console.log(item.shop_id)
			item.store.forEach((g,i)=>{
				let goodsImg = g.image_default_id.replace(/^\//,BASE_HOST);
				let price = formatPrice(g.price)
				list.push(
					<div className="swiper-slide store-goods-item" key={i}>
						<a href={`${BASE_HOST}wap/prepare-item.html?shop_id=${item.shop_id}&item_id=${g.item_id}`}>
							<LazyLoad once height={80}><img src={goodsImg} className="img"/></LazyLoad>
							<span className="price">{`￥${price}`}</span>
						</a>
					</div>
				)
			})
		})
		return list;
	}

	nearStoreList(){
		let {shops,coords} = this.props.index;
		let list = [];
		if(!isArray(shops) || shops.length < 1) return '';
		shops.forEach((item,i)=>{
			//console.log(item,coords)
			let way = distance(coords.latitude,coords.longitude,item.dimensions,item.longitude);
			list.push(
				<div className="flex shop-item" key={i}>
					<a className="shop-img" href={`${BASE_HOST}oto/shop-index.html?shop_id=${item.shop_id}`}>
					<LazyLoad once height={88}><img src={item.shop_logo} className="img"/></LazyLoad>
					</a>
						<div className="shop-info">
								<div className="flex flex-around">
									<span className="shop-name">{item.shop_name}</span>
									<i className="distance">距离{way}</i>
									<a className="shop-path" href={`${BASE_HOST}oto/shop-index.html?shop_id=${item.shop_id}`}>去这里<i className="iconfont icon-zuji"></i></a>
								</div>
								<div className="coupon">
									<a href={`${BASE_HOST}wap/s-coupon.html`}><span className="coupon-tag">领券</span>优惠券领取中心</a>
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
		
		return (
			<div className="near-store">
				<div className="store-title">
					<span>附近的微店</span>
					<a  className="store-link" href={`${BASE_HOST}oto/shop-list.html`}>
						<span>更多店铺</span><i className="iconfont icon-more"></i>
					</a>
				</div>
				<div className="store-list">
					{this.nearStoreList()}
				</div>
				<div className="store-title">
					<span>年度优惠套餐</span>
					<a  className="store-link" href={`${BASE_HOST}wap/prepare-index.html?shop_id=${shopId}`}>
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

