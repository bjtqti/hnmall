import React, {Component} from 'react'
import {BASE_HOST} from '../common/constant'
import BannerSwipe from './banner.jsx'
import Detail from './detail.jsx'
import ToolBar from './toolbar.jsx'
import Popup from './popup.jsx';
import Menu from './menu.jsx'
import GoTop from '../commponents/gotop.jsx'
import Loading from '../commponents/loading.jsx'
 

export class GoodsDetail extends Component {
	 

	constructor(props) {
		super(props);
		this.state = {
			showMenu:false,
			isActivePop:false
		}
		this.handleClickPop = this.handleClickPop.bind(this);
		this.handleShowMenu = this.handleShowMenu.bind(this);
		this.handleHideMenu = this.handleHideMenu.bind(this);
	}

	componentDidMount() {
		
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

	handleClickPop(){
		let {isActivePop} = this.state;
		this.setState({
			isActivePop:!isActivePop
		})
	}

	render() {
		let {goodsDetail,isFetching} = this.props.goods;
		let price = goodsDetail.price.split('.');
		let shopLink = `${BASE_HOST}wap/shop-index.html?shop_id=${goodsDetail.shop_id}`;
		//console.log(maskClass)
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
				<ToolBar {...this.props} />
				<Popup {...this.props} show={this.state.isActivePop} onTap={this.handleClickPop} />
				<Loading active={isFetching}/>
				<GoTop />
			</div>
		)
	}
}