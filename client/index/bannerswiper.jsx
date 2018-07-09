import React, {Component} from 'react'
import PropTypes from 'prop-types'
//import Swiper from 'swiper';
import {BASE_HOST} from '../common/constant'

export default class BannerSwipe extends Component {
	static propTypes = {
		sliders: PropTypes.array
	}
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let Swiper = require('swiper')
		let mySwiper = new Swiper(this.refs.slider, {
			autoplay:5000,
			lazyLoading:true,
			pagination: '.swiper-pagination'
		});
	}

	renderSlider(){
		let {sliders} = this.props;
		return sliders.map((d,i)=>{
			let url = d.link.replace(/^\//,BASE_HOST);
			return (<div className="swiper-slide" key={i}>
					<a href={d.linktarget}><img className="img swiper-lazy" data-src={url} alt={d.linkinfo}/></a>
					<div className="swiper-lazy-preloader"></div>
				</div>)
		})
	}

	render() {
		return (
			<div ref="slider" className="swiper-container">
				<div className="swiper-wrapper">{this.renderSlider()}</div>
				<div className="swiper-pagination"></div>
			</div>
		)
	}
}