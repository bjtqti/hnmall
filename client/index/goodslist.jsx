import React, {Component} from 'react'
import classNames from "classnames";
import axios from 'axios';
import {formatPrice} from '../lib'
import {BASE_HOST} from '../common/constant'

export default class GoodsList extends Component {
	 
	constructor(props) {
		super(props);
		this.state = {
			goodsData:[]
		}
	}

	componentDidMount() {
		setTimeout(()=>{
			this.fetchGoodsList()
		},100)
	}

	fetchGoodsList() {
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
							<img src={goods.image_default_id} className="img" />
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

