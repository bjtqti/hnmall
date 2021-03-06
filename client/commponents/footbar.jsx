import React, {Component} from 'react'
//import classNames from "classnames";
import Config from '../../share/config.js'

export default class FootBar extends Component {
	 
	constructor(props) {
		super(props);
		 
	}

	componentDidMount() {
		
	}

	render() {
		let {host} = Config;
		return (
			<div className="app-foot-bar">
				<a className="foot-bar-item" href="/">
					<img className="icon" src={`${host}themes/mobilemall/images/d-icon1.png`} />
					<span>首页</span>
				</a>
				<a className="foot-bar-item" href="/category.html">
					<img className="icon" src="https://www.hnmall.com/themes/mobilemall/images/d-icon2.png"/>
					<span>分类</span>
				</a>
				<a className="foot-bar-item" href={`${host}wap/cart.html`}>
					<img className="cart" src="https://www.hnmall.com/themes/mobilemall/images/d-icon3.jpg" />
					<span>购物车</span>
				</a>
				<a className="foot-bar-item" href={`${host}weidian/store-index.html`}>
					<img className="icon" src="https://www.hnmall.com/themes/mobilemall/images/d-icon4.png" />
					<span>店铺</span>
				</a>
				<a className="foot-bar-item" href={`${host}wap/member.html`}>
					<img className="icon" src="https://www.hnmall.com/themes/mobilemall/images/d-icon5.png" />
					<span>会员</span>
				</a>
			</div>
		)
	}
}

