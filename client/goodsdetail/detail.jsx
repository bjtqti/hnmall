import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from "classnames"
import {isArray,isObject} from '../lib'
//import config from '../../share/config.js'

export default class Detail extends Component {
	static propTypes = {
		sliders: PropTypes.array
	}
	constructor(props) {
		super(props);
		this.state = {
			activeIndex:0
		}
	}

	componentDidMount() {
		let {goodsDetail} = this.props.goods;
		this.props.fetchGoodsDetail({
			itemId:goodsDetail.item_id
		})
		
		let Swiper = import('swiper').then((m)=>{
			let Swiper = m.default;
			this.mySwiper = new Swiper(this.refs.slider, {
				autoHeight:true,
				onSlideChangeEnd:(s)=>{
					let activeIndex = s.activeIndex;
					this.handleClick(activeIndex)
				}
			});
		})
	}

	handleClick(index){
		if(this.state.activeIndex === index){
			return false;
		}

		this.mySwiper.slideTo(index);
		 
		this.setState({
			activeIndex:index
		})
	}

	renderTabSilder(){
		const {activeIndex} = this.state;
		const arr = ['图文详情','详细参数','备注信息'];
		return arr.map((item,i)=>{
			let tabClass = classNames("slider-item",{
				active:activeIndex===i
			})
			return (
				<div onClick={this.handleClick.bind(this,i)} className={tabClass} key={i}>{item}</div>
			)
		})
	}

	renderDetailHTML(detail){
		let html = '';
		if(isObject(detail)){
			html = detail.desc;
		}
		return {__html:html};
	}

	renderGoodsParam(detail){
		//console.log(detail)
		if(!detail || !isArray(detail.props)|| !detail.props.length){
			return <div className="empty-props">暂无参数信息</div>;
		}
		return detail.props.map((item,i)=>{
			return (
				<div className="parameter-table-view-cell" key={item.id}>
					<div className="parameter-table-view-key">{item.name}</div>
					<div className="parameter-table-view-val">{item.value}</div>
				</div>
			)
		})
	}

	renderGoodsNote(detail){
		if(!detail || !isArray(detail.remark) || !detail.remark.length){
			return <div className="empty-props">暂无信息</div>;
		}
		return detail.remark.map((item,i)=>{
			//console.log(item)
			return (
				<div className="parameter-table-view-cell" key={i}>
					<div className="parameter-table-view-key">{item.name}</div>
					<div className="parameter-table-view-val">{item.value}</div>
				</div>
			)
		})
	}

	render() {
		let {detail} = this.props.goods;
 		return (
			<div className="section margin">
				<div className="flex">
					{this.renderTabSilder()}
				</div>
				<div ref="slider" className="swiper-container detail-info">
			        <div className="swiper-wrapper">
			          	<div className="swiper-slide" dangerouslySetInnerHTML={this.renderDetailHTML(detail)}></div>
			          	<div className="swiper-slide">
		 					<div className="parameter-table-view-header">基本参数</div>
		 					{this.renderGoodsParam(detail)}
			          	</div>
			          	<div className="swiper-slide">
			          		{this.renderGoodsNote(detail)}
			          	</div>
			        </div>
		      	</div>
	      	</div>
		)
	}
}