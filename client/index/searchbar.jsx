import React, {Component} from 'react'
import {getScrollTop,isArray,localCache} from '../lib/index.js'
import {BASE_HOST,INSTALL_APP} from '../common/constant.js'
 
export default class SearchBar extends Component {
	 

	constructor(props) {
		super(props); 
		this.state = {
			isInsApp:false,
			opacity:0,
			value:''
		}
	}

	componentDidMount(){
		let install = localCache(INSTALL_APP);
		this.setState({
			isInsApp:install
		})
		window.addEventListener('scroll',()=>{
			let height = 1000; //body.scrollHeight
			let ms = getScrollTop();
			let move = (ms > 50 ) ? true : false;
			let num = ms / height;
			let opacity = num > 1 ? 1 : num.toFixed(1);
			this.setState({
				isInsApp:install?true:move,
				opacity:num.toFixed(1)
			})
		})
	}

	handleChange(e){
		let value = e.target.value;
		this.setState({value});
	}

	render() {
		let {isInsApp,opacity} = this.state;
		let {shops} = this.props.index;
		let position = {top:isInsApp ? '0':'50px','backgroundColor':`rgba(237,103,74,${opacity})`}
		let shopName = isArray(shops) ? shops[0].shop_name:''
		 
		return (
			<div style={position} className="search-bar">
				<a href={`${BASE_HOST}oto/shop-list.html`} className="shop-link">
					<i className="icon-point"></i>
					<span className="shop-name ellipsis">{shopName}</span>
				</a>
				<form action={`${BASE_HOST}wap/item-list.html`} method="post" className="search-box">
					<i className="iconfont icon-zoom"></i>
					<input type="text" name="search_keywords" placeholder="附近的店铺、商品" value={this.state.value} onChange={(event)=>{this.handleChange(event)}}/>
				</form>
				<div className="iconfont icon-guangbo icon-cost"></div>
			</div>
		)
	}
}

