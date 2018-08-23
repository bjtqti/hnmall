import React, {Component} from 'react'
import AppBar from '../commponents/appbar.jsx'
import SearchBar from './searchbar.jsx'
import BannerSwiper from './bannerswiper.jsx'
import NavMenu from './navmenu.jsx'
import TextSwiper from './textswiper.jsx'
import Shop from './shop.jsx'
import Widget from './widget.jsx'
import FootBar from '../commponents/footbar.jsx'
import GoodsList from './goodslist.jsx'
import Copyright from '../commponents/copyright.jsx'
import GoTop from '../commponents/gotop.jsx'
import {GPS_KEY,INSTALL_APP,BASE_HOST,TOKEN,APPID} from '../common/constant.js'
import {fetchApi,localCache,isWechat,navigatorGeolocation,createNonceStr,parseUrl,wxShare} from '../lib/index.js'
 
export class Index extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isInsApp:false
		}
	}

	componentDidMount() {
		let install = localCache(INSTALL_APP);
		let pos = localCache(GPS_KEY);
		let token = localCache(TOKEN);

		if(pos) {
			this.props.getNearStore(pos)
		}else{
			this.getGeoLocation((r)=>{
				this.props.getNearStore(r);
			})
		}
 
		this.setState({
			isInsApp:install
		})
		
		if(token){
			this.checkToken(token);
		}else{
			this.getUserInfo();
		}

		isWechat() && this.setWeixinShare();
	}

	setWeixinShare(){
		const url = encodeURIComponent(document.location.href);
		fetchApi('/index/weixin',{
			method:'POST',
			data: {url:url}
		}).then((data)=>{
			//console.log(data)
			wxShare({
				appId:data.appId,
				nonceStr:data.nonceStr,
				signature:data.signature,
				timestamp:data.timestamp,
				agentid:data.agentid,
				title:"友阿微店--更高品质,便捷生活",
				link:location.href,
				desc:'友阿微店--更高品质,便捷生活',
				imgUrl:'https://www.hnmall.com/images/3a/e5/c5/076ec271495f7494427fad42f6c0d2443189019b.jpg'
			},(res)=>{
				fetchApi('/index/wxshare',{
					method:'POST',
					data:res
				})
			})
		})
	}

	checkToken(token){
		fetchApi('/index/checktoken',{
			method:'POST',
			data:{
				token:token
			}
		}).then((res)=>{
			if(res.code !== 0){
				this.getUserInfo();
			}
		})
	}

	getUserInfo(){
		let code = parseUrl('code');
		if(!code && isWechat()){
			let state = createNonceStr(16);
			let redirect = encodeURIComponent(window.location.origin);
			let getcode = `${BASE_HOST}weidian/get-code.html?appid=${APPID}&state=${state}&scope=snsapi_base&redirect_uri=${redirect}`;
			//console.log(getcode)
			location.href = getcode;
			return false;
		}
		
		//console.log(code)
		if(!code) {
			return false;
		}

		fetchApi('/index/token',{
			method:'POST',
			data:{
				code:code
			}
		}).then((res)=>{
			if(res && res.message && res.message.accessToken){
				localCache(TOKEN,res.message.accessToken,7*24*60*60)
			}
		})
	}

	//获取位置信息
	getGeoLocation(fn){
		let pos = {latitude:28.234589,longitude:112.913554};
		navigatorGeolocation((res)=>{
			//console.log(res)
			if(res){
				pos = res;
				localCache(GPS_KEY,pos,60*60);
			}
			fn(pos)
		})
	}


	/**
	 * 首页挂件
	 */
	renderWidgets(){
		let {modules,more_url} = this.props.index;
		let widgets = [];
		modules.forEach((module,i)=>{
			switch(module.widget){
				case 'slider':
					widgets.push(<BannerSwiper sliders={module.params.pic} key={`slider_${i}`}/>);
					break;
				case 'icons_nav':
					widgets.push(<NavMenu icons={module.params.pic} key={`nav_${i}`}/>);
					break;
				case 'ad_content':
					widgets.push(<TextSwiper message={module.params.ad_content} more={more_url} key={`ad_${i}`}/>);
					break;
				case 'floor':
					widgets.push(<Widget params={module.params} key={`floor_${i}`}/>);
					break;
				default:
					break;
			}
			
		})
		return widgets;
	}

	render() {
		//console.log(this.props)
		let {isInsApp} = this.state;
		let position = {height:isInsApp?'0':'50px'}
		let widgets = this.renderWidgets();
		//插入线下门店
		widgets.splice(3,0,<Shop {...this.props} key={'shop'}/>);

		return (
			<div className="app-wrap">
				<AppBar/>
				<div style={position}></div>
				<SearchBar {...this.props}/>
				{widgets}
				<GoodsList {...this.props}/>
				<FootBar />
				<Copyright />
				<GoTop />
			</div>
		)
	}
}