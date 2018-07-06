import React, {Component} from 'react'
import LazyLoad from 'react-lazyload'
import {BASE_HOST} from '../common/constant'

export default class Widget extends Component {
	 
	constructor(props) {
		super(props);
		 
	}

	gridStyleOne(pic){
		return (
			<div className="widget-grid flex">
				<a className="widget grid-half" href={pic[0].linktarget}>
					<LazyLoad height={120}><img src={pic[0].image} className="img"/></LazyLoad>
				</a>
				<a className="widget grid-half" href={pic[1].linktarget}>
					<LazyLoad height={120}><img src={pic[1].image} className="img"/></LazyLoad>
				</a>
			</div>
		)
	}

	gridStyleTwo(pic){
		return (
			<div className="widget-grid flex" data-type="two">
				<div className="widget grid-half">
					<a className="widget b-b-l" href={pic[0].linktarget}>
						<LazyLoad height={121}><img src={pic[0].image} className="img"/></LazyLoad>
					</a>
					<div className="flex">
						<a className="widget grid-half" href={pic[1].linktarget}>
							<LazyLoad height={121}><img src={pic[1].image} className="img"/></LazyLoad>
						</a>
						<a className="widget grid-half" href={pic[2].linktarget}>
							<LazyLoad height={121}><img src={pic[2].image} className="img"/></LazyLoad>
						</a>
					</div>
				</div>
				<a className="widget grid-half" href={pic[3].linktarget}>
					<LazyLoad height={242}><img src={pic[3].image} className="img"/></LazyLoad>
				</a>
			</div>
		)
	}

	gridStyleThree(pic){
		return (
			<div className="widget-grid flex" data-type="three">
				<a className="widget grid-half" href={pic[0].linktarget}>
					<LazyLoad height={242}><img src={pic[0].image} className="img"/></LazyLoad>
				</a>
				<div className="widget grid-half">
					<a className="widget b-b-l" href={pic[1].linktarget}>
						<LazyLoad height={120}><img src={pic[1].image} className="img"/></LazyLoad>
					</a>
					<div className="flex">
						<a className="widget grid-half" href={pic[2].linktarget}>
							<LazyLoad height={120}><img src={pic[2].image} className="img"/></LazyLoad>
						</a>
						<a className="widget grid-half" href={pic[3].linktarget}>
							<LazyLoad height={120}><img src={pic[3].image} className="img"/></LazyLoad>
						</a>
					</div>
				</div>
			</div>
		)
	}

	gridStyleFour(pic){
		return(
			<div className="widget-grid" data-type="four">
				<div className="flex">
					<a className="widget grid-half" href={pic[0].linktarget}>
						<LazyLoad height={120}><img src={pic[0].image} className="img"/></LazyLoad>
					</a>
					<a className="widget grid-half" href={pic[1].linktarget}>
						<LazyLoad height={120}><img src={pic[1].image} className="img"/></LazyLoad>
					</a>
				</div>
				<div className="flex">
					<a className="widget grid-25" href={pic[2].linktarget}>
						<LazyLoad height={120}><img src={pic[2].image} className="img"/></LazyLoad>
					</a>
					<a className="widget grid-25" href={pic[3].linktarget}>
						<LazyLoad height={120}><img src={pic[3].image} className="img"/></LazyLoad>
					</a>
					<a className="widget grid-half" href={pic[4].linktarget}>
						<LazyLoad height={120}><img src={pic[4].image} className="img"/></LazyLoad>
					</a>
				</div>
			</div>
		)
	}

	gridStyleFive(pic){
		return (
			<div className="widget-grid" data-type="five">
				<div className="flex">
					<a className="widget grid-half" href={pic[0].linktarget}>
						<LazyLoad height={120}><img src={pic[0].image} className="img"/></LazyLoad>
					</a>
					<a className="widget grid-half" href={pic[1].linktarget}>
						<LazyLoad height={120}><img src={pic[1].image} className="img"/></LazyLoad>
					</a>
				</div>
				<div className="flex">
					<a className="widget grid-25" href={pic[2].linktarget}>
						<LazyLoad height={120}><img src={pic[2].image} className="img"/></LazyLoad>
					</a>
					<a className="widget grid-25" href={pic[3].linktarget}>
						<LazyLoad height={120}><img src={pic[3].image} className="img"/></LazyLoad>
					</a>
					<a className="widget grid-25" href={pic[4].linktarget}>
						<LazyLoad height={120}><img src={pic[4].image} className="img"/></LazyLoad>
					</a>
					<a className="widget grid-25" href={pic[5].linktarget}>
						<LazyLoad height={120}><img src={pic[5].image} className="img"/></LazyLoad>
					</a>
				</div>
			</div>
		)
	}

	gridStyleSix(pic){
		return(
			<div className="widget-grid" data-type="six">
				<div className="flex">
					<a className="widget grid-33" href={pic[0].linktarget}>
						<LazyLoad height={120}><img src={pic[0].image} className="img"/></LazyLoad>
					</a>
					<a className="widget grid-33" href={pic[1].linktarget}>
						<LazyLoad height={120}><img src={pic[1].image} className="img"/></LazyLoad>
					</a>
					<a className="widget grid-33" href={pic[2].linktarget}>
						<LazyLoad height={120}><img src={pic[2].image} className="img"/></LazyLoad>
					</a>
				</div>
				<div className="flex">
					<a className="widget grid-33" href={pic[3].linktarget}>
						<LazyLoad height={120}><img src={pic[3].image} className="img"/></LazyLoad>
					</a>
					<a className="widget grid-33" href={pic[4].linktarget}>
						<LazyLoad height={120}><img src={pic[4].image} className="img"/></LazyLoad>
					</a>
					<a className="widget grid-33" href={pic[5].linktarget}>
						<LazyLoad height={120}><img src={pic[5].image} className="img"/></LazyLoad>
					</a>
				</div>
			</div>
		)
	}

	renderGrid(){
		let {params} = this.props;

		if(!Array.isArray(params.pic)){
			return;
		}

		params.pic.forEach((item)=>{
			item.image =  item.image.replace(/^\//,BASE_HOST);
		})
		switch(params.styletag){
			case 'one':
				return this.gridStyleOne(params.pic);
			case 'two':
				return this.gridStyleTwo(params.pic);
			case 'three':
				return this.gridStyleThree(params.pic);
			case 'four':
				return this.gridStyleFour(params.pic);
			case 'five':
				return this.gridStyleFive(params.pic);
			case 'six':
				return this.gridStyleSix(params.pic);
			default:
				return '';
		}
	}

	render() {
		 
		return (
			<div className="widget-grid">
				<div className="widget-grid-title">{this.props.params.title}</div>
				{this.renderGrid()}
			</div>
		)
	}
}

