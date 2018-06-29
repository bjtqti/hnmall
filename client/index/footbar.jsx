import React, {Component} from 'react'
//import classNames from "classnames";
//import {BASE_HOST} from '../common/constant'

export default class FootBar extends Component {
	 
	constructor(props) {
		super(props);
		 
	}

	componentDidMount() {
		
	}

	render() {
		
		return (
			<div className="app-foot-bar">
				<div className="foot-bar-item">
					<a className="icon-home" href="/wap">首页</a>
				</div>
				<div className="foot-bar-item">
					<a className="icon-categroy" href="/wap">分类</a>
				</div>
				<div className="foot-bar-item">
					<a className="icon-cart" href="/wap">购物车</a>
				</div>
				<div className="foot-bar-item">
					<a className="icon-shop" href="/wap">店铺</a>
				</div>
				<div className="foot-bar-item">
					<a className="icon-member" href="/wap">会员</a>
				</div>
			</div>
		)
	}
}

