import React, {Component} from 'react'
import {BASE_HOST} from '../common/constant'
import BannerSwipe from './banner.jsx'
import Detail from './detail.jsx'
import ToolBar from './toolbar.jsx'
import Popup from './popup.jsx'
import Menu from './sidemenu.jsx'
import GoTop from '../commponents/gotop.jsx'
import Loading from '../commponents/loading.jsx'
import {fetchApi,isWechat,wxShare} from '../lib/index.js'

export class GoodsDetail extends Component {
	 
	constructor(props) {
		super(props);
		this.state = {
			showMenu:false
		}
		this.handleClickPop = this.handleClickPop.bind(this);
		this.handleShowMenu = this.handleShowMenu.bind(this);
		this.handleHideMenu = this.handleHideMenu.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		isWechat() && this.setWeixinShare();
	}

	setWeixinShare(){
		const url = encodeURIComponent(document.location.href);
		const {title,sub_title,thumbnail} = this.props.goods.goodsDetail;
		fetchApi('/index/weixin',{
			method:'POST',
			data: {url:url}
		}).then((data)=>{
			//console.log(data)
			wxShare({
				appId:data.appId,
				nonceStr:data.nonceStr,
				signature:data.signature,
				timestamp:data.timestamp,
				agentid:data.agentid,
				title:title,
				link:location.href,
				desc:sub_title,
				imgUrl:thumbnail
			},(res)=>{
				fetchApi('/index/wxshare',{
					method:'POST',
					data:res
				})
			})
		})
	}

	handleBack(){
		history.back()
	}

	handleShowMenu(){
		this.setState({
			showMenu:true
		})
	}

	handleHideMenu(){
		this.setState({
			showMenu:false
		})
	}

	handleClickPop(){
		this.props.togglePopup({
			status:true
		})
	}

	handleSubmit(){
		 
		 
	}

	filterCheckedAttr(goodsDetail){
		let {attr} = goodsDetail;
		let value = [];
		let name = [];
		for(let s of attr){
			name.push(s.name)
			for(let v of s.values){
				if(v.checked){
					value.push(v.value);
					break;
				}
			}
		}
		return value.join(';')||'请选择'+name.join(',');
	}

	submitCheck(){
		let {sku} = this.props.goods.goodsDetail;
		let checkedItem;
		for(let s of sku){
			if(s.checked && s.valid && s.store >0){
				checkedItem = s;
				break;
			}
		}
		return checkedItem;
	}

	render() {
		let {goodsDetail,isFetching} = this.props.goods;
		let price = goodsDetail.price.split('.');
		let shopLink = `${BASE_HOST}wap/shop-index.html?shop_id=${goodsDetail.shop_id}`;
		let buttonStatus = this.submitCheck();
		return (
			<div className="app-wrap">
				<div className="header">
					<div className="back" onClick={this.handleBack}>
						<i className="iconfont icon-zuo"></i>
					</div>
					<div className="menu" onClick={this.handleShowMenu}>
						<i className="iconfont icon-caidan"></i>
					</div>
				</div>
				<Menu bindTap={this.handleHideMenu} active={this.state.showMenu}/>
				<BannerSwipe sliders={goodsDetail.images} />
				<div className="section">
					<div className="title">{goodsDetail.title}</div>
					<div className="sub-title">{goodsDetail.sub_title}</div>
					<div className="price">￥<b>{price[0]}</b><i>.{price[1]}</i><del>{goodsDetail.mkt_price}</del></div>
				</div>
				<div className="section margin">
					<div className="attr-row" onClick={this.handleClickPop}>
						<span className="attr-tip">已选</span>
						<span className="attr-name">{this.filterCheckedAttr(goodsDetail)}</span>
						<i className="iconfont icon-arrowright"></i>
					</div>
					<div className="attr-row">
						<span className="attr-tip">提示:</span>
						<span className="attr-name">卖家承担运费</span>
						<i className="iconfont icon-arrowright"></i>
					</div>
				</div>
				<div className="section flex shop">
					<a className="shop-logo" hef="/"><img className="img" src={goodsDetail.shoplogo} /></a>
					<div className="shop-name">{goodsDetail.shopname}</div>
					<a className="shop-enter" href={shopLink}>进店逛逛</a>
				</div>
				<Detail {...this.props} />
				<ToolBar {...this.props} buy={this.handleSubmit} status={buttonStatus} />
				<Popup {...this.props} buy={this.handleSubmit} status={buttonStatus} />
				<Loading active={isFetching} />
				<GoTop />
			</div>
		)
	}
}