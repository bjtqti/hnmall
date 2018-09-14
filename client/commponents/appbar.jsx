import React, {Component} from 'react'
import classNames from "classnames";
import {INSTALL_APP} from '../common/constant';
import {localCache,getScrollTop,throttle} from '../lib'

export default class AppBar extends Component {
	 
	constructor(props) {
		super(props);
		this.state = {
			active : false
		}
		this.handleClick = this.handleClick.bind(this)
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

		//this.launchApp();
	}

	// //唤醒本机APP
	// launchApp(fn){
	// 	if(platform.isWx()){
	// 		fn && fn();
	// 		return false;
	// 	}
	// 	let last = Date.now();
	// 	let doc = window.document;
	// 	let ifr = doc.createElement('iframe');
	// 	let scheme = '';
	// 	const config = {
	// 	    ios: 'YouAWeishop://',
	// 	    android: 'YouAWeishop://'
	// 	};

 //        if(platform.isIOS()){
 //        	scheme = config.ios;
 //        }else if(platform.isAndroid()){
 //        	scheme = config.android;
 //        }

 //        ifr.src = scheme;
	//     ifr.style.display = 'none';  
	//     document.body.appendChild(ifr);
	//     setTimeout(function(){
	//     	if(Date.now()-last < 150){
	//     		//launch fail
	//     		fn && fn(scheme);
	//     	}else{
	//     		localCache(INSTALL_APP,'install',7*24*60*60);
	//     	}
	//     	doc.body.removeChild(ifr);
	//     },100);
	// }


	onViewScroll(){
		window.addEventListener('scroll',throttle(()=>{
			let ms = getScrollTop();
			//console.log(ms)
			let active = ms > 50 ? false : true
			this.setState({
				active
			})
		},50),false)
	}

	handleClick(){
		//this.launchApp(function(scheme){
			location.href='https://www.hnmall.com/downloadPage/default.html'
		//})
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

