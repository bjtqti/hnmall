import React, {Component} from 'react'
import classNames from "classnames";
import {BASE_HOST,INSTALL_APP} from '../common/constant';
import {localCache,getScrollTop} from '../lib'

export default class AppBar extends Component {
	 
	constructor(props) {
		super(props);
		this.state = {
			active : false
		}
	}

	componentDidMount() {
		let install = localCache(INSTALL_APP)
		//console.log(install,this.props.install)
		this.setState({
			active:!install
		});
		if(!install){
			this.onViewScroll();
		}
	}


	onViewScroll(){
		window.addEventListener('scroll',()=>{
			let ms = getScrollTop();
			//console.log(ms)
			let active = ms > 50 ? false : true
			this.setState({
				active
			})
		})
	}

	handleClick(){
		localCache(INSTALL_APP,1);
		location.href='https://www.hnmall.com/downloadPage/default.html'
	}

	render() {
		let {active} = this.state;
		let appStatus = classNames("app-download-bar",{
			show:active
		})
		return (
			<div className={appStatus} onClick={this.handleClick}>
				<div className="flex bar">
					<div className="logo"></div>
						<div className="app-down">
							<div className="app-name">友阿微店APP</div>
							<div className="app-desc">002277友阿股份旗下新零售平台</div>
						</div>
						<div className="app-tip">立即打开</div>
				</div>
			</div>
		)
	}
}

