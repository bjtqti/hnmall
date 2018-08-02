import React, {Component} from 'react'
import {BASE_HOST} from '../common/constant'

export default class ToolBar extends Component {
	 
	constructor(props) {
		super(props);
		this.handleAddToCart = this.handleAddToCart.bind(this);
		this.handleClickBuy = this.handleClickBuy.bind(this);
	}

	componentDidMount() {
		 
	}

	handleAddToCart(){

	}

	handleClickBuy(){

	}

	render() {
		return (
			<div className="tool-bar flex">
				<div className="item">
					<i className="iconfont icon icon-start-off"></i>
					<span className="text">收藏</span>
				</div>
				<div className="item">
					<i className="iconfont icon icon-cart"></i>
					<span className="text">购物车</span>
				</div>
				<div onClick={this.handleAddToCart} className="button add-cart">加入购物车</div>
				<div onClick={this.handleClickBuy} className="button buy">立即购买</div>
			</div>
		)
	}
}