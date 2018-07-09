import React, {Component} from 'react'
import classNames from "classnames";
import {BASE_HOST,INSTALL_APP} from '../common/constant'
import {getLocationTencent} from '../lib'

export default class SearchBar extends Component {
	 
	constructor(props) {
		super(props); 
		this.state = {
			showApp:false,
			value:'',
			shopName:''
		}
	}

	componentDidMount(){
		let install = localStorage.getItem(INSTALL_APP)
		this.setState({
			showApp:install?false:true
		})

		this.getShopLocation();
	}

	getShopLocation(){
		let axios = require('../common/axios.min.js');
		let update = (r)=>{
			r = r || {lat:'28.234589',lng:'112.913554'}
			axios.get(`/shopinfo?lat=${r.lat}&lng=${r.lng}`).then((res)=>{
				//console.log(res)
				this.setState({
					shopName:res.data.message[0].shop_name
				})
			})
		}
		getLocationTencent((res)=>{
			update(res)
		})
	}

	handleChange(e){
		let value = e.target.value;
		this.setState({value});
	}

	render() {
		return (
			<div className="search-bar">
				<a href={`${BASE_HOST}oto/shop-list.html`} className="shop-link">
					<i className="icon-point"></i>
					<span className="shop-name ellipsis">{this.state.shopName}</span>
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

