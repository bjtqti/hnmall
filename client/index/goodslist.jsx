import React, {Component} from 'react'
import LazyLoad from 'react-lazyload';
import {getScrollTop,localCache,throttle,getScrollHeight,isArray} from '../lib'
import {TOKEN} from '../common/constant'
import config from '../../share/config.js'

export default class GoodsList extends Component {
	 
	constructor(props) {
		super(props);
		this.state = {
			isReachButton:false
		}
	}

	componentDidMount() {
		this.token = localCache(TOKEN)||'';
		let height = window.innerHeight;
		window.addEventListener('scroll',throttle((e)=>{
			let  scrollTop = getScrollTop();
			let scrollHeight = getScrollHeight();
			if((scrollTop+height)/scrollHeight>0.4){
				this.fetchGoodsList();
			}
		},200),false)
	}

	fetchGoodsList() {
		let {pageIndex=1,isFetching,isFetched,goodsList} = this.props.index;
		
		//正在获取数据
		if(isFetching) {
			return false;
		}

		//获取不到数据
		if(isFetched){
			return false;
		}

		//App上猜你喜欢只取前200条数据
		if(goodsList.length >=200){
			this.setState({
				isReachButton:true
			})
			return false;
		}
		this.props.fetchGoods({
			page:pageIndex,
			size:20,
			token:this.token
		})
	}

	renderList(){
		let {goodsList} = this.props.index;
		let {host} = config;
		if(!isArray(goodsList)){
			return ''
		}
		let placeImg  = (<img src={`${host}res/images/cplogo.jpg`} />);
		let list = goodsList.map((goods,i)=>{
			let price = goods.price.split('.');
			return(
				<div className="goods-list-item" key={goods.item_id}>
					<a href={`${host}wap/item-detail.html?item_id=${goods.item_id}`}>
						<div className="goods-img">
						<LazyLoad once height={177} offsetVertical={200}
						placeholder = {placeImg}>
							<img src={goods.image_default_id} className="img" />
						</LazyLoad>
						</div>
						<div className="goods-title mutiple-text">{goods.title}</div>
						<div className="goods-price">
							<span className="sign">￥</span>
							<span className="price">{price[0]}</span>
							<b className="price-s">.{price[1]}</b>
							<span className="mkt-price">{goods.mkt_price}</span>
							<i className="buy">马上抢</i>
						</div>
					</a>
				</div>
			)
		})
		return (
			<div className="goods-list">{list}</div>
		)
	}

	render() {
		//console.log(this.props)
		let {isFetching} = this.props.index;
		let {isReachButton} = this.state;
		let display = {display:isFetching ? 'block':'none'}
		let showmore={display:isReachButton ? 'block':'none'};
		return (
			<div className="wrap">
				<div className="goods-list-title">猜你喜欢</div>
				{this.renderList()}
				<div className="lazy-load-wrap" style={display}>
					<div className="swiper-lazy-preloader"></div>
					<div className="lazy-load-text">加载中...</div>
				</div>
				<div style={showmore} className="more-goods">
					<a href="/category.html"><span>没有找到想要的商品?换个方式</span><i className="iconfont icon-more"></i></a>
				</div>
			</div>
		)
	}
}

