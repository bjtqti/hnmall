import React, {Component} from 'react'
import classNames from "classnames";
import {getScrollTop} from '../lib'

export default class GoTop extends Component {
	 
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
		this.state = {
			active : false
		}
	}

	componentDidMount() {
		let bounce = Math.ceil(window.innerHeight*2);
		window.addEventListener('scroll',()=>{
			let  scrollTop = getScrollTop();
			let active = scrollTop>bounce;
			//console.log(scrollTop)
			this.setState({
				active:active
			})
		})
	}

	handleClick(){
		document.body.scrollTop = 0;
    	document.documentElement.scrollTop = 0;
		this.setState({
			active:false
		})
	}

	render() {
		let {active} = this.state;
		let appStatus = classNames('app-go-top',{
			active:active
		})
		return (
			<div className={appStatus} onClick={this.handleClick}></div>
		)
	}
}

