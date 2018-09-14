import React, {Component} from 'react'
import {isArray} from '../lib/index.js'

export default class NavMenu extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let {icons} = this.props;
		if(!isArray(icons)){
			return '';
		}
		let menu = icons.map((d,i)=>{
			return (
				<div className="nav-menu-item" key={i}>
					<a href={d.h5link}>
						<img className="nav-menu-icon" src={d.image} alt={d.tag}/>
						<span className="nav-menu-text">{d.tag}</span>
					</a>
				</div>
			)
		})
		return (
			<div className="nav-menu">
				{menu}
			</div>
		)
	}
}