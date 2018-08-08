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
		this.handleCloseAlert=this.handleCloseAlert.bind(this)
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

	submitCheck(goodsDetail){
		let {sku} = goodsDetail;
		let allowed = false;
		for(let s of sku){
			if(s.checked && s.valid && s.store >0){
				allowed = true;
				break;
			}
		}
		return allowed
	}

	filter(goodsDetail){
		let {attr,sku} = goodsDetail;
		let name = '';
		let title=[];
		let price = '';
		
		for(let s of sku){
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
		}

		return {
			name:name||'请选择'+title.join(''),
			price:price||'0.00'
		}
	}

	handleHidePop(){
		this.props.onTap()
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
		let selected = this.filter(goods);
		let price = selected.price.split('.');
		
		return (
			<div className="goods-info flex">
				<div className="goods-img">
					<a href="javascript:;"><img className="img" src={goods.thumbnail} /></a>
				</div>
				<div className="goods-attr">
					<div className="price">￥<b>{price[0]}</b>.{price[1]}</div>
					<div className="attr">{selected.name}</div>
				</div>
				<div className="close" onClick={this.handleHidePop}>
					<i className="iconfont icon-close"></i>
				</div>
			</div>
		)
	}

	render() {
		let {onTap,show} = this.props;
		let {goodsDetail,error} = this.props.goods;
		let maximum = Math.max(goodsDetail.user_max_limit||goodsDetail.store);
		let allowed = this.submitCheck(goodsDetail);
		let popupWrap = classNames("popup-wrap",{
			active:show
		})
		let showPop = classNames("popup",{
			active:show
		});
		let submit = classNames("button",{
			active:allowed
		});

		console.log(goodsDetail)
		return (
			<div ref="popup" className={popupWrap}>
				<div className="mask" onClick={this.handleHidePop}></div>
				<div className={showPop}>
					{this.renderGoodsInfo(goodsDetail)}
					{this.renderAttrList(goodsDetail)}
					<div className="bar">
						<NumberPicker minimum={1} maximum={maximum}/>
						<div className={submit}>立即购买</div>
					</div>
				</div>
				<Alert message={error} close={this.handleCloseAlert}/>
			</div>
		)
	}
}