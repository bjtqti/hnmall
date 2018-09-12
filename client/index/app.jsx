import React, {Component} from 'react'
import AppBar from '../commponents/appbar.jsx'
import Headerbar from './headerbar.jsx'
import BannerSwiper from './bannerswiper.jsx'
import NavMenu from './navmenu.jsx'
import TextSwiper from './textswiper.jsx'
import Shop from './shop.jsx'
import Widget from './widget.jsx'
import FootBar from '../commponents/footbar.jsx'
import GoodsList from './goodslist.jsx'
import Copyright from '../commponents/copyright.jsx'
import GoTop from '../commponents/gotop.jsx'
import Share from '../commponents/share.jsx'
import {GPS_KEY,BASE_HOST,TOKEN,APPID,AGENTID} from '../common/constant.js'
import {fetchApi,localCache,isWechat,navigatorGeolocation,getLocationByWeixin,createNonceStr,parseUrl} from '../lib/index.js'

export class Index extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let pos = localCache(GPS_KEY);
		let token = localCache(TOKEN);

		this.props.fetchIndexModules();

		if(pos) {
			this.props.getNearStore(pos)
		}else{
			this.getGeoLocation((r)=>{
				this.props.getNearStore(r);
			})
		}
		
		if(token){
			this.checkToken(token);
		}else{
			this.getUserInfo();
		}

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
		if(!isWechat()){
			return false;
		}
		let code = parseUrl('code');
		if(!code){
			let state = createNonceStr(16);
			let redirect = encodeURIComponent(window.location.origin);
			let getcode = `${BASE_HOST}weidian/get-code.html?appid=${APPID}&state=${state}&scope=snsapi_base&redirect_uri=${redirect}`;
			//console.log(getcode)
			location.href = getcode;
			return false;
		}
		
		fetchApi('/index/token',{
			method:'POST',
			data:{
				code:code
			}
		}).then((res)=>{
			if(res && res.message && res.message.accessToken){
				localCache(TOKEN,res.message.accessToken,7*24*60*60);
				localCache(AGENTID,res.message.agent_id,30*24*60*60);
				this.agentid = res.message.agent_id;
			}
		})
	}

	//获取位置信息
	getGeoLocation(fn){
		let pos = {latitude:28.194104,longitude:113.013206}
		//let pos = {latitude:28.234589,longitude:112.913554};
		if(isWechat()){
			fetchApi('/index/weixin',{
				method:'POST',
				data: {url:encodeURIComponent(document.location.href)}
			}).then((data)=>{
				//console.log(data)
				let {appId,nonceStr,signature,timestamp} = data;
				getLocationByWeixin({appId,nonceStr,signature,timestamp},(r)=>{
					if(r){
						pos = r;
						localCache(GPS_KEY,pos,60*60);
					}
					fn(pos)
				})
			})
		}else{
			navigatorGeolocation((res)=>{
				//console.log(res)
				if(res){
					pos = res;
					localCache(GPS_KEY,pos,60*60);
				}
				fn(pos)
			})
		}

	}


	/**
	 * 首页挂件
	 */
	renderWidgets(){
		let {modules,more_url} = this.props.index;
		let widgets = [];
		//console.log(modules,more_url)
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
		let widgets = this.renderWidgets();
		const shareInfo = {
			agentid:this.agentid,
			title:'友阿微店--更高品质,便捷生活',
			desc:'友阿微店--更高品质,便捷生活',
			image:'https://www.hnmall.com/images/3a/e5/c5/076ec271495f7494427fad42f6c0d2443189019b.jpg'
		};
		//插入线下门店
		widgets.splice(3,0,<Shop {...this.props} key={'shop'}/>);

		return (
			<div className="app-wrap">
				<AppBar/>
				<Headerbar {...this.props}/>
				{widgets}
				<GoodsList {...this.props}/>
				<FootBar />
				<Copyright />
				<GoTop />
				<Share info={shareInfo}/>
			</div>
		)
	}
}