import React, {Component} from 'react'
import {formatPrice,isArray,distance} from '../lib'
import {BASE_HOST} from '../common/constant';
//import {localCache} from '../lib'

export default class Shop extends Component {
	 

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let Swiper = require('swiper');
		let store = this.refs.store;
		let slider = new Swiper(store, {
			slidesPerView:4,
			preloadImages:false
		});
	}

	handleClick(){
		 
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
							<img src={goodsImg} className="img" />
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
			//console.log(item)
			let way = distance(coords.lat,coords.lng,item.dimensions,item.longitude);
			list.push(
				<div className="flex shop-item" key={i}>
					<a className="shop-img" href={`${BASE_HOST}oto/shop-index.html?shop_id=${item.shop_id}`}><img src={item.shop_logo} className="img"/></a>
					 
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

	render() {
		let {shops} = this.props.index;
		let shopId = isArray(shops) ?  shops[0].shop_id : '';
		return (
			<div className="near-store">
				<div className="store-title">
					<span>附近的微店</span>
					<a  className="store-link" href={`${BASE_HOST}oto/shop-list.html`}>
						<span>更多</span><i className="iconfont icon-more"></i>
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
			</div>
		)
	}
}

