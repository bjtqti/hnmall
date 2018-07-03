import React, {Component} from 'react'
import classNames from "classnames";
//import axios from 'axios';
import {INSTALL_APP} from '../common/constant'
import {getLocation} from '../lib'

export default class SearchBar extends Component {
	 
	constructor(props) {
		super(props); 
		this.state = {
			showApp:false,
			value:'',
			shopName:''
		}
		//this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount(){
		let install = localStorage.getItem(INSTALL_APP)
		this.setState({
			showApp:install?false:true
		})

		setTimeout(()=>{
			this.getShopLocation()
		},500)
	}

	getShopLocation(){
		getLocation((point)=>{
			//console.log(point)
			point = point || {
				lat:'28.234589',
				lng:'112.913554'
			}
			axios.get(`/shopinfo?lat=${point.lat}&lng=${point.lng}`).then((res)=>{
				//console.log(res)
				this.setState({
					shopName:res.data.message[0].shop_name
				})
			})
		})
	}

	handleChange(e){
		let value = e.target.value;
		this.setState({value});
	}

	render() {
		let position = {
			top:this.state.showApp ? '55px':'0'
		}
		return (
			<div style={position} className="search-bar">
				<a href="https://www.hnmall.com/oto/shop-list.html" className="shop-link">
					<i className="icon-point"></i>
					<span className="shop-name">{this.state.shopName}</span>
				</a>
				<form action="https://www.hnmall.com/wap/item-list.html" method="post" className="search-box">
					<label></label>
					<input type="text" name="search_keywords" placeholder="附近的店铺、商品" value={this.state.value} onChange={(event)=>{this.handleChange(event)}}/>
				</form>
				<div className="icon-cost"></div>
			</div>
		)
	}
}

