import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {BASE_HOST} from '../common/constant'

export default class BannerSwipe extends Component {
	static propTypes = {
		sliders: PropTypes.array
	}
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if(this.props.sliders.length<2) return false;
		let mySwiper = new Swiper(this.refs.slider, {
			autoplay: {
				delay:5000
			},
			pagination: {
			    el: '.swiper-pagination'
			}
		});

	}

	renderSlider(){
		let {sliders} = this.props;
		return sliders.map((d,i)=>{
			let url = d.link.replace(/^\//,BASE_HOST);
			return (<div className="swiper-slide" key={i}>
					<a href={d.linktarget}><img className="img" src={url} alt={d.linkinfo}/></a>
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