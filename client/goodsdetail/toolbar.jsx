import React, {Component} from 'react'
import classNames from "classnames";
import {BASE_HOST} from '../common/constant'

export default class ToolBar extends Component {
	 
	constructor(props) {
		super(props);
		this.state = {
			isActive:false
		}
		this.handleFavorite = this.handleFavorite.bind(this);
		this.handleAddToCart = this.handleAddToCart.bind(this);
		this.handleClickBuy = this.handleClickBuy.bind(this);
	}

	componentDidMount() {
		 
	}

	handleFavorite(){
		let {isActive} = this.state;
		this.setState({
			isActive:!isActive
		})
	}

	handleAddToCart(){
		let {status} = this.props;
		if(!status){
			this.props.togglePopup({
				status:true
			})
		}
		//...
	}

	handleClickBuy(){
		let {status} = this.props;
		if(!status){
			this.props.togglePopup({
				status:true
			})
		}
		this.props.buy()
	}

	render() {
		let {isActive} = this.state;
		let iconClass = classNames("iconfont icon",{
			"icon-start-off" : !isActive,
			"icon-start-on" : isActive
		});
		return (
			<div className="tool-bar flex">
				<div className="item" onClick={this.handleFavorite}>
					<i className={iconClass}></i>
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