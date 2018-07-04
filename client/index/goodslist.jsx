import React, {Component} from 'react'
//import classNames from "classnames";
import LazyLoad from 'react-lazyload'
import {formatPrice,getScrollTop} from '../lib'
import {BASE_HOST} from '../common/constant'

export default class GoodsList extends Component {
	 
	constructor(props) {
		super(props);
		this.state = {
			isBusy:false,
			goodsData:[]
		}
	}

	componentDidMount() {
		let bounce = Math.ceil(window.innerHeight/2);
		window.addEventListener('scroll',()=>{
			if(this.state.isBusy){
				return false;
			}

			let  scrollTop = getScrollTop();
			//console.log(scrollTop)
			if(scrollTop>bounce){
				this.fetchGoodsList()
			}
		})
	}

	fetchGoodsList() {
		this.setState({
			isBusy:true
		})
		axios.get('/goodslist').then((res)=>{
			//console.log(res)
			this.setState({
				goodsData:res.data.goodslist
			})
		})
	}


	renderList(){
		let {goodsData} = this.state;
		let list = goodsData.map((goods)=>{
			return(
				<div className="goods-list-item" key={goods.item_id}>
					<a href={`${BASE_HOST}wap/item-detail.html?item_id=${goods.item_id}`}>
						<div className="goods-img">
						<LazyLoad once={true} height={177} offsetTop={500}
						placeholder = {<img className="img" src="https://wd.hnmall.com/res/images/cplogo.jpg" debounce={500} />}>
							<img src={goods.image_default_id} className="img" />
						</LazyLoad>
						</div>
						<div className="goods-title mutiple-text">{goods.title}</div>
						<div className="goods-price">
							<span className="price">{formatPrice(goods.price)}</span>
							<span className="mkt-price">{formatPrice(goods.mkt_price)}</span>
							<i className="buy">马上抢</i>
						</div>
					</a>
				</div>
			)
		})
		return(
			<div className="goods-list">
				{list}
			</div>
		)
	}
	 

	render() {
		return (
			<div className="wrap">
				<div className="goods-list-title">猜你喜欢</div>
				{this.renderList()}
			</div>
		)
	}
}

