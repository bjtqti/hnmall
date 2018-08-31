import React, {Component} from 'react'
import {isArray} from '../lib/index.js'
//import PropTypes from 'prop-types'

export default class TextSwiper extends Component {

	// static propTypes = {
	// 	message: PropTypes.array
	// }

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if(!this.refs.marquee){
			return false;
		}
		import('swiper').then((m)=>{
			//console.log(m.default);
			let Swiper = m.default
			let mySwiper = new Swiper(this.refs.marquee, {
				direction : 'vertical',
				loop:true,
				autoplay:5000
			});
		});
	}

	render() {
		let {more,message} = this.props;
		if(!isArray(message)){
			return '';
		}
		let sliders = message.map((d,i)=>{
			return (
				<div className="swiper-slide" key={i}>
					<a className="swiper-slide-row" href={d.link}>{d.linkinfo}</a>
				</div>
			)
		})
		return (
			<div className="swiper-message">
				<div className="message-slogan">友阿<span>快报</span></div>
				<div ref="marquee" className="swiper-container">
					<div className="swiper-wrapper">{sliders}</div>
				</div>
				<div className="message-core">| <a href={more}>更多</a></div>
			</div>
		)
	}
}