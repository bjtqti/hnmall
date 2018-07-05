import React, {Component} from 'react'
//import classNames from "classnames";

export default class Loading extends Component {
	 
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		
	}

	renderCube(){
		return (
			<div className="spinner-2">
				<div className="cube1"></div>
			 	<div className="cube2"></div>
			</div>
		)
	}

	rendeSpiner(){
		return (
			<div className="spinner-4">
				<div className="bounce1"></div>
			  	<div className="bounce2"></div>
			  	<div className="bounce3"></div>
			</div>
		)
	}

	render() {
		let {name,active} = this.props;
		let loading;
		let status = {
			display:active ? 'block' : 'none'
		}
		switch(name){
			case 'spinner':
				loading = this.rendeSpiner()
				break;
			default:
				loading = this.renderCube()
				break;
		}
		return (
			<div className="loading-box" style={status}>{loading}</div>
		)
	}
}

