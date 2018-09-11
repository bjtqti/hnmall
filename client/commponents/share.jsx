import React, {Component} from 'react'
import {fetchApi,isWechat,wxShare} from '../lib/index.js'

export default class Alert extends Component {
	 
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		isWechat() && this.setWeixinShare();
	}

	formatShareLink(url,id){
		if(url.indexOf('?')!== -1){
			if(url.indexOf('agent_id=') !== -1){
				return url.replace(/agent_id=\d+/,`agent_id=${id}`)
			}else{
				return `${url}&agent_id=${id}`
			}
		}else{
			return `${url}?agent_id=${id}`
		}
	}

	setWeixinShare(){
		const url = document.location.href;
		const {title,desc,image} = this.props.info;
		fetchApi('/index/weixin',{
			method:'POST',
			data: {url:encodeURIComponent(url)}
		}).then((data)=>{
			//console.log(data)
			let shareLink = this.formatShareLink(url,data.agentid);
			wxShare({
				appId:data.appId,
				nonceStr:data.nonceStr,
				signature:data.signature,
				timestamp:data.timestamp,
				agentid:data.agentid,
				title:title,
				link:shareLink,
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

	render() {
		return '';
	}
}

