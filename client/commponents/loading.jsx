import React, {Component} from 'react'
//import classNames from "classnames";

export default class Loading extends Component {
	 
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		
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
		let {active} = this.props;
		let status = {
			display:active ? 'block' : 'none'
		}
		return (
			<div className="loading-box" style={status}>
				<div className="spinner-4">
					<div className="bounce1"></div>
				  	<div className="bounce2"></div>
				  	<div className="bounce3"></div>
				</div>
			</div>
		)
	}
}

