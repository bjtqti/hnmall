import React, {Component} from 'react'
import classNames from "classnames";
import {BASE_HOST,INSTALL_APP} from '../common/constant'

export default class AppBar extends Component {
	 
	constructor(props) {
		super(props);
		//this.handleClick = this.handleClick.bind(this)
		this.state = {
			active : false
		}
	}

	componentDidMount() {
		let install = localStorage.getItem(INSTALL_APP)
		this.setState({
			active:!install
		})
	}

	handleClick(){
		localStorage.setItem(INSTALL_APP,1);
		location.href=`${BASE_HOST}downloadPage/default.html`
	}

	render() {
		let {active} = this.state;
		let appStatus = classNames('app-download-bar',{
			show:active
		})
		return (
			<div className={appStatus} onClick={this.handleClick}>
				<img src={`${BASE_HOST}res/images/app_2054.png`} className="img"/>
			</div>
		)
	}
}

