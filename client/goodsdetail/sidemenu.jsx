import React, {Component} from 'react'
import classNames from "classnames";

export default class Menu extends Component {
	 
	constructor(props) {
		super(props);
		this.handleHide = this.handleHide.bind(this)
	}

	componentDidMount() {

		// let popup = this.refs.popup;
		// popup.addEventListener('touchmove',(e)=>{
		// 	e.preventDefault();
		// })
	}



	handleHide(){
		this.props.bindTap()
	}
	 
	render() {
		let {active} = this.props;
		let menuClass = classNames("float-menu",{
			active:active
		})
		return (
			<div className={menuClass} onClick={this.handleHide}>
				<div className="mask"></div>
				<ul className="menu-layer">
					<li className="menu-item">
						<a href="/">
							<i className="iconfont icon-home"></i>
							<span className="menu-text">首页</span>
						</a>
					</li>
					<li className="menu-item">
						<a href="/category.html">
							<i className="iconfont icon-cate"></i>
							<span className="menu-text">分类</span>
						</a>
					</li>
					<li className="menu-item">
						<a href="https://www.hnmall.com/wap/cart.html">
							<i className="iconfont icon-cart"></i>
							<span className="menu-text">购物车</span>
						</a>
					</li>
					<li className="menu-item">
						<a href="https://www.hnmall.com/weidian/store-index.html">
							<i className="iconfont icon-shop"></i>
							<span className="menu-text">店铺</span>
						</a>
					</li>
					<li className="menu-item">
						<a href="https://www.hnmall.com/wap/member.html">
							<i className="iconfont icon-user"></i>
							<span className="menu-text">会员</span>
						</a>
					</li>
				</ul>
			</div>
		)
	}
}