import React, {Component} from 'react'
//import classNames from "classnames";
import {BASE_HOST} from '../common/constant'

export default class FootBar extends Component {
	 
	constructor(props) {
		super(props);
		 
	}

	componentDidMount() {
		
	}

	render() {
		
		return (
			<div className="app-foot-bar">
				<a className="foot-bar-item" href="/">
					<img className="icon" src="https://wd.hnmall.com/themes/mobilemall/images/d-icon1.png" />
					<span>首页</span>
				</a>
				<a className="foot-bar-item" href="/category.html">
					<img className="icon" src="https://wd.hnmall.com/themes/mobilemall/images/d-icon2.png"/>
					<span>分类</span>
				</a>
				<a className="foot-bar-item" href={`${BASE_HOST}wap/cart.html`}>
					<img className="cart" src="https://wd.hnmall.com/themes/mobilemall/images/d-icon3.jpg" />
					<span>购物车</span>
				</a>
				<a className="foot-bar-item" href={`${BASE_HOST}weidian/store-index.html`}>
					<img className="icon" src="https://wd.hnmall.com/themes/mobilemall/images/d-icon4.png" />
					<span>店铺</span>
				</a>
				<a className="foot-bar-item" href="/login.html">
					<img className="icon" src="https://wd.hnmall.com/themes/mobilemall/images/d-icon5.png" />
					<span>会员</span>
				</a>
			</div>
		)
	}
}

