import React, {Component} from 'react'
import {isArray} from '../lib/index.js'

export default class BannerSwipe extends Component {
	
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if(!this.refs.slider){
			return false;
		}
		import('swiper').then((m)=>{
			let Swiper = m.default;
			let mySwiper = new Swiper(this.refs.slider, {
				autoplay:5000,
				lazyLoading:true,
				pagination: '.swiper-pagination'
			});
		})
	}


	render() {
		let {sliders} = this.props;
		if(!isArray(sliders)){
			return '';
		}
		let items  = sliders.map((d,i)=>{
			return (<div className="swiper-slide banner" key={i}>
					<a href={d.linktarget}><img className="img swiper-lazy" data-src={d.link} /></a>
					<div className="swiper-lazy-preloader"></div>
				</div>)
		});
		return (
			<div ref="slider" className="swiper-container">
				<div className="swiper-wrapper">{items}</div>
				<div className="swiper-pagination"></div>
			</div>
		)
	}
}