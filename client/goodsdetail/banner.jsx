import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class BannerSwipe extends Component {
	static propTypes = {
		sliders: PropTypes.array
	}
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let Swiper = import('swiper').then((m)=>{
			let Swiper = m.default;
			let mySwiper = new Swiper(this.refs.slider, {
				autoplay:5000,
				lazyLoading:true,
				pagination: '.swiper-pagination'
			});
		})
	}

	renderSlider(){
		let {sliders} = this.props;
		return sliders.map((d,i)=>{
			return (
				<div className="swiper-slide" key={i}>
					<img className="img swiper-lazy" data-src={d} />
					<div className="swiper-lazy-preloader"></div>
				</div>
			)
		})
	}

	render() {
		return (
			<div ref="slider" className="swiper-container banner">
				<div className="swiper-wrapper">{this.renderSlider()}</div>
				<div className="swiper-pagination"></div>
			</div>
		)
	}
}