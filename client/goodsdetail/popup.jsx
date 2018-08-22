import React, {Component} from 'react'
import classNames from "classnames";
import {isObject,isArray} from '../lib'
import NumberPicker from '../commponents/numberpicker.jsx'
import Alert from '../commponents/alert'
import {BASE_HOST} from '../common/constant'

export default class Popup extends Component {
	 
	constructor(props) {
		super(props);
		this.handleHidePop = this.handleHidePop.bind(this);
		this.handleCloseAlert=this.handleCloseAlert.bind(this);
		this.handleBuy = this.handleBuy.bind(this)
	}

	componentDidMount() {

		// let popup = this.refs.popup;
		// popup.addEventListener('touchmove',(e)=>{
		// 	e.preventDefault();
		// })
	}

	toggle(i,j) {
		let {attr}=this.props.goods.goodsDetail;
		//if(attr[i].values[j].checked) return false;
		if(attr[i].values[j].disabled) return false;
		this.props.toggleAttr({i,j});
	}


	filter(goodsDetail){
		let {attr,sku} = goodsDetail;
		let name = '';
		let title=[];
		let price = '';
		
		for(let i=0;i<sku.length;i++){
			let s = sku[i];
			if(s.checked){
				price = s.price;
				name = s.value;
				break;
			}
		}

		if(!name){
			attr.forEach((item)=>{
				title.push(item.name);
			})
			name = '请选择'+title.join('');
		}

		if(!price){
			sku.sort((num1, num2) => {
			    return num1.price - num2.price
			});
			let p1 = sku[0].price;
			let p2 = sku[sku.length-1].price;
			price = p2 != p1 ? `${p1} - ${p2}` : p1;
		}
		return {
			name,
			price
		}
	}

	handleHidePop(){
		this.props.togglePopup({
			status:false
		})
	}

	handleCloseAlert(){
		this.props.closeAlert()
	}

	renderAttrList(goods){
		if(!isObject(goods)||!isArray(goods.attr)) {
			return ''
		}
		let attrList = [];
		goods.attr.forEach((item,i)=>{
			let values = item.values.map((v,j)=>{
				let status = classNames("attr-item",{
					checked:v.checked,
					disabled:v.disabled
				})
				return (
					<div onClick={this.toggle.bind(this,i,j)} className={status} key={v.id}>{v.value}</div>
				)
			})
			attrList.push(
				<div className="attr-wrap" key={item.id}>
					<div className="attr-type">{item.name}</div>
					<div className="attr-items flex">{values}</div>
				</div>
			)
		})
		return (
			<div className="attr-list">{attrList}</div>
		)
	}

	renderGoodsInfo(goods){
		if(!isObject(goods)) {
			return '数据错误'
		}
		let {name,price} = this.filter(goods);
		//console.log(name,price)
		let fprice = (price)=>{
			if(price.indexOf('-')>0){
				return price
			}
			let arr = price.split('.');
			return <span><b>{arr[0]}</b>.{arr[1]}</span>
		}
		
		return (
			<div className="goods-info flex">
				<div className="goods-img">
					<a href="javascript:;"><img className="img" src={goods.thumbnail} /></a>
				</div>
				<div className="goods-attr">
					<div className="price">￥{fprice(price)}</div>
					<div className="attr">{name}</div>
				</div>
				<div className="close" onClick={this.handleHidePop}>
					<i className="iconfont icon-close"></i>
				</div>
			</div>
		)
	}

	handleBuy(){
		this.props.togglePopup({
			status:false
		})
		this.props.buy();
	}

	render() {
		let {goodsDetail,error,popupStatus} = this.props.goods;
		let maximum = Math.max(goodsDetail.user_max_limit||goodsDetail.store);
		 
		let popupWrap = classNames("popup-wrap",{
			active:popupStatus
		})
		let showPop = classNames("popup",{
			active:popupStatus
		});
		let submit = classNames("button",{
			active:this.props.status
		});

		//console.log(goodsDetail)
		return (
			<div ref="popup" className={popupWrap}>
				<div className="mask" onClick={this.handleHidePop}></div>
				<div className={showPop}>
					{this.renderGoodsInfo(goodsDetail)}
					{this.renderAttrList(goodsDetail)}
					<div className="bar">
						<NumberPicker minimum={1} maximum={maximum}/>
						<div className={submit} onClick={this.handleBuy}>立即购买</div>
					</div>
				</div>
				<Alert message={error} close={this.handleCloseAlert}/>
			</div>
		)
	}
}