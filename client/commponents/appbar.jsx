import React, {Component} from 'react'
import classNames from "classnames";
import {BASE_HOST,INSTALL_APP} from '../common/constant';
import {localCache,getScrollTop,platform} from '../lib'

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

		this.launchApp();
	}

	//唤醒本机APP
	launchApp(fn){
		let last = Date.now();
		let doc = window.document;
		let ifr = doc.createElement('iframe');
		let scheme = '';
		const config = {
		    ios: 'YouAWeishop://',
		    android: 'YouAWeishop://'
		};
		if(platform.isWx()){
			fn && fn();
		}
        if(platform.isIOS()){
        	scheme = config.ios;
        	if(!platform.isQQ()){
        		location.href = scheme;
        	}
        }else if(platform.isAndroid()){
        	scheme = config.android; 
        }else {
        	return false;
        }

        ifr.src = scheme;
	    ifr.style.display = 'none';  
	    document.body.appendChild(ifr);
	    setTimeout(function(){
	    	if(Date.now()-last < 1050){
	    		//launch fail
	    		fn && fn();
	    	}else{
	    		localCache(INSTALL_APP,'install',7*24*60*60);
	    	}
	    	doc.body.removeChild(ifr);
	    },1000);
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
		this.launchApp(()=>{
			location.href='https://www.hnmall.com/downloadPage/default.html'
		})
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

