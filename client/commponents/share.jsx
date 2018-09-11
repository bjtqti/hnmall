import React, {Component} from 'react'
import {fetchApi,isWechat,wxShare} from '../lib/index.js'

export default class Alert extends Component {
	 
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		isWechat() && this.setWeixinShare();
	}

	setWeixinShare(){
		const url = document.location.href;
		const {title,desc,image} = this.props.info;
		fetchApi('/index/weixin',{
			method:'POST',
			data: {url:encodeURIComponent(url)}
		}).then((data)=>{
			//console.log(data)
			wxShare({
				appId:data.appId,
				nonceStr:data.nonceStr,
				signature:data.signature,
				timestamp:data.timestamp,
				agentid:data.agentid,
				title:title,
				link:url.replace(/agent_id=[0-9]+/,'agent_id='+data.agentid),
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

