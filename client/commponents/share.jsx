import React, {Component} from 'react'
import {fetchApi,localCache,isWechat,wxShare,createNonceStr,parseUrl} from '../lib/index.js'
import {BASE_HOST,AGENTID,APPID,TOKEN} from '../common/constant'

export default class Share extends Component {
	 
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//console.log(agentid)
		if(!isWechat()){
			return false;
		}
		this.setWeixinShare();
	}

	setWeixinShare(aid){
		const {title,desc,image} = this.props.info;
		let url = document.location.href;
		fetchApi('/index/weixin',{
			method:'POST',
			data: {url:encodeURIComponent(url)}
		}).then((data)=>{
			//console.log(agentid)
			let agentid = localCache(AGENTID)||aid;
			if(!agentid){
				this.getUserInfo()
			}
			wxShare({
				appId:data.appId,
				nonceStr:data.nonceStr,
				signature:data.signature,
				timestamp:data.timestamp,
				agentid:agentid,
				title:title,
				link:url,
				desc:desc,
				imgUrl:image
			},(res)=>{
				fetchApi('/index/wxshare',{
					method:'POST',
					data:res
				})
			})
		})
	}

	getUserInfo(){
		let code = parseUrl('code');
		if(!code){
			let state = createNonceStr(16);
			let redirect = encodeURIComponent(location.href);
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
			if(res && res.message){
				let {accessToken,agent_id} =  res.message;
				localCache(TOKEN,accessToken,7*24*60*60);
				localCache(AGENTID,agent_id,30*24*60*60);
				this.setWeixinShare(agent_id);
			}
		})
	}

	render() {
		return '';
	}
}

