import React, {Component} from 'react'
import classNames from "classnames";

export default class Alert extends Component {
	 
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		
	}

	render() {
		let {active,message} = this.props;
		let status = classNames("app-mask",{
			active:active
		})
		return (
			<div className={status}>
				<div className="alert-container">
					<div className="alert-message">{message}</div>
					<div className="alert-button">确定</div>
				</div>
			</div>
		)
	}
}

