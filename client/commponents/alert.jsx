import React, {Component} from 'react'
import classNames from "classnames";

export default class Alert extends Component {
	 
	constructor(props) {
		super(props);
		this.hanleClick = this.hanleClick.bind(this)
	}

	componentDidMount() {
		
	}

	hanleClick(){
		this.props.close()
	}

	render() {
		let {message} = this.props;
		let maskStatus = classNames("app-mask",{
			active:message
		});
		let container = classNames("alert-container",{
			active:message
		})
		return (
			<div className={maskStatus}>
				<div className={container}>
					<div className="alert-content">{message}</div>
					<div onClick={this.hanleClick} className="alert-button">确定</div>
				</div>
			</div>
		)
	}
}

