import React, {Component} from 'react'
import AppBar from './appbar.jsx'
import SearchBar from './searchbar.jsx'
import BannerSwiper from './bannerswiper.jsx'
import NavMenu from './navmenu.jsx'
import TextSwiper from './textswiper.jsx'
import Shop from './shop.jsx'
import Widget from './widget.jsx'
import FootBar from '../commponents/footbar.jsx'
import GoodsList from './goodslist.jsx'
import Copyright from './copyright.jsx'
import GoTop from '../commponents/gotop.jsx'
import {GPS_KEY,INSTALL_APP,BASE_HOST} from '../common/constant.js';
import {fetchApi,localCache,isWechat,navigatorGeolocation,getLocationByWeixin} from '../lib/index.js'
 
export class Index extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isInsApp:false
		}
	}

	componentDidMount() {
		let install = localCache(INSTALL_APP)
		let pos = localCache(GPS_KEY)

		if(pos) {
			this.props.getNearStore(pos)
		}else{
			this.getGeoLocation((r)=>{
				this.props.getNearStore(r);
			})
		}
		this.setState({
			isInsApp:install
		});
	}

	//获取位置信息
	getGeoLocation(fn){
		//let pos = {latitude:28.194104,longitude:113.013206}
		let pos = {latitude:28.234589,longitude:112.913554};
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
						localCache(GPS_KEY,pos);
					}
					fn(pos)
				})
			})
		}else{
			navigatorGeolocation((res)=>{
				if(res){
					pos = res;
					localCache(GPS_KEY,pos);
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
		widgets.splice(3,0,<Shop {...this.props} key={'shop'}/>)
		return (
			<div className="app-wrap">
				<AppBar />
				<SearchBar {...this.props} install={isInsApp}/>
				<div style={position}></div>
				{widgets}
				<GoodsList {...this.props}/>
				<FootBar />
				<Copyright />
				<GoTop />
			</div>
		)
	}
}