import React, {Component} from 'react'
import SearchBar from '../commponents/searchbar.jsx';
import {getScrollTop,isArray,localCache,throttle} from '../lib/index.js'
import {BASE_HOST,INSTALL_APP} from '../common/constant.js'
 
export default class Headerbar extends Component {

	constructor(props) {
		super(props); 
		this.state = {
			isInsApp:false,
			opacity:0
		}
	}

	componentDidMount(){
		let install = localCache(INSTALL_APP);
		this.setState({
			isInsApp:install
		});
		window.addEventListener('scroll',throttle((e)=>{
			let height = 200; //body.scrollHeight
			let ms = getScrollTop();
			let move = (ms > 50 ) ? true : false;
			let num = ms / height;
			let opacity = num > 1 ? 1 : num.toFixed(1);
			if(opacity ===1) return false;
			this.setState({
				isInsApp:install?true:move,
				opacity
			})
		},100),false)
	}

	render() {
		let {isInsApp,opacity} = this.state;
		let {shops} = this.props.index;
		let position = {top:isInsApp ? '0':'50px','backgroundColor':`rgba(237,103,74,${opacity})`}
		let shopName = isArray(shops) ? shops[0].shop_name:''
		let blank = {display:isInsApp?'none':'block',height:'50px'}
		return (
			<div className="shearch-box">
				<div style={position} className="search-bar">
					<a href={`${BASE_HOST}oto/shop-list.html`} className="shop-link">
						<i className="icon-point"></i>
						<span className="shop-name ellipsis">{shopName}</span>
					</a>
					<SearchBar placeholder="附近的店铺、商品" />
					<div className="iconfont icon-guangbo icon-cost"></div>
				</div>
				<div style={blank}></div>
			</div>
		)
	}
}

