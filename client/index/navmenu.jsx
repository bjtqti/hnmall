import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {BASE_HOST} from '../common/constant'

export default class NavMenu extends Component {
	static propTypes = {
		icons: PropTypes.array
	}

	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	renderMenu(){
		let {icons} = this.props;
		return icons.map((d,i)=>{
			return (
				<div className="nav-menu-item" key={i}>
					<a href={d.h5link}>
						<img className="nav-menu-icon" src={d.image.replace(/^\//,BASE_HOST)} alt={d.tag}/>
						<span className="nav-menu-text">{d.tag}</span>
					</a>
				</div>
			)
		})
	}

	render() {
		return (
			<div className="nav-menu">
				{this.renderMenu()}
			</div>
		)
	}
}