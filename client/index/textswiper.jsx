import React, {Component} from 'react'
import PropTypes from 'prop-types'
//import Swiper from 'swiper'

export default class TextSwiper extends Component {
	static propTypes = {
		message: PropTypes.array
	}
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let Swiper = import('swiper').then((m)=>{
			//console.log(m.default);
			let Swiper = m.default
			let mySwiper = new Swiper(this.refs.marquee, {
				direction : 'vertical',
				loop:true,
				autoplay:5000
			});
		});

	}

	renderSlider(){
		let {message} = this.props;
		return message.map((d,i)=>{
			return (
				<div className="swiper-slide" key={i}>
					<a className="swiper-slide-row" href={d.link}>{d.linkinfo}</a>
				</div>
			)
		})
	}

	render() {
		let {more} = this.props;
		return (
			<div className="swiper-message">
				<div className="message-slogan">友阿<span>快报</span></div>
				<div ref="marquee" className="swiper-container">
					<div className="swiper-wrapper">{this.renderSlider()}</div>
				</div>
				<div className="message-core">| <a href={more}>更多</a></div>
			</div>
		)
	}
}