import React, {Component} from 'react'
import classNames from "classnames";
import axios from 'axios';
import {localCache,isObject} from '../lib'
//import {USER_INFO,BASE_HOST} from  '../common/constant'
import FootBar from '../commponents/footbar.jsx'

export class Index extends Component {
	 
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this)
		this.state = {
			user:{},
			isLogin:false
		}
	}

	componentDidMount() {
		//let user = localCache(USER_INFO);
		if(user && isObject(user)){
			this.setState({
				user:user,
				isLogin:true
			})
		}
	}

	handleLogin(){
		location.href="/login.html"
	}

	render() {
		let {isLogin} = this.state;
		let visible = classNames("mask",{
			hide:isLogin
		})
		return (
			<div className="app-wrap">
				<div onClick={this.handleLogin} className={visible}></div>
				<div className="header">
					<div className="flex header-top">
						<div className="flex user-avatar">
							<img src={`${BASE_HOST}/res/images/session.png`} className="img"/>
							<div className="login">登录/注册</div>
						</div>
						<div className="edit">编辑</div>
					</div>
				</div>
				<div className="shader-box">
					<div className="layer-view">
						<div className="half-wrap">
							<div className="m-order">
								<span>我的订单</span>
								<a href="/">查看更多订单</a>
							</div>
							<div className="flex order-tab">
								<div className="order-tab-item">
									<div className="num">0</div>
									<div>待付款</div>
								</div>
								<div className="order-tab-item">
									<div className="num">0</div>
									<div>待发货</div>
								</div>
								<div className="order-tab-item">
									<div className="num">0</div>
									<div>待收货</div>
								</div>
								<div className="order-tab-item">
									<div className="num">0</div>
									<div>退款/售后</div>
								</div>
							</div>
						</div>
						<div className="user-acount">
							<div className="user-acount-item">
								<div className="num">0</div>
								<div>购物卡余额</div>
							</div>
							<div className="user-acount-item">
								<div className="num">0</div>
								<div>我的优惠券</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex board">
					<div className="board-item">
						<a href="https://www.hnmall.com/wap/breakfast-list.html" className="board-item-link">
							<div className="icon-food"></div>
							<div>我的早餐</div>
						</a>
					</div>
					<div className="board-item">
						<a href="https://www.hnmall.com/wap/prepare-list.html" className="board-item-link">
							<div className="icon-detail"></div>
							<div>年度套餐</div>
						</a>
					</div>
					<div className="board-item">
						<a href="https://www.hnmall.com/wap/member-collectitems.html" className="board-item-link">
							<div className="icon-favor"></div>
							<div>我的收藏</div>
						</a>
					</div>
					<div className="board-item">
						<a href="https://www.hnmall.com/wap/member-security.html" className="board-item-link">
							<div className="icon-safe"></div>
							<div>安全中心</div>
						</a>
					</div>
					<div className="board-item">
						<a href="/" className="board-item-link">
							<div className="icon-server"></div>
							<div>我的客服</div>
						</a>
					</div>
					<div className="board-item">
						<a href="/" className="board-item-link">
							<div className="icon-seting"></div>
							<div>设置</div>
						</a>
					</div>
				</div>
				<FootBar />
			</div>

		)
	}
}