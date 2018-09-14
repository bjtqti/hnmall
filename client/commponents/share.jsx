import React, {Component} from 'react'
import {fetchApi,localCache,isWechat,wxShare,createNonceStr} from '../lib/index.js'
import {AGENTID,TOKEN} from '../common/constant'
import Config from '../../share/config.js'

export default class Share extends Component {
	 
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//console.log(agentid)
		if(!isWechat()){
			return false;
		}

		let token = localCache(TOKEN);
		this.checkToken(token);
		this.setWeixinShare();
	}

	setWeixinShare(aid,lock){
		const {title,desc,image} = this.props.info;
		let url = document.location.href;
		fetchApi('/index/weixin',{
			method:'POST',
			data: {url:encodeURIComponent(url)}
		}).then((data)=>{
			//console.log(agentid)
			let agentid = localCache(AGENTID)||aid;
			if(!agentid){
				!lock && this.getUserInfo();
				return false;
			}
			this.wxShare({
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

	parseUrl(name){
	    let url = window.location.search;
	    let query = url.replace('?','').split('&');
	    let code = '';
	    for(let i = 0 ;i <query.length;i++){
	        let path = query[i].split('=');
	        if(path[0]===name){
	            code = path[1];
	            break;
	        }
	    }
	    return code;
	}


	getUserInfo(){
		let code = this.parseUrl('code');
		let {host,appid} = Config;
		console.log(Config)
		if(!code){
			let state = createNonceStr(16);
			let redirect = encodeURIComponent(location.href);
			let getcode = `${host}weidian/get-code.html?appid=${appid}&state=${state}&scope=snsapi_base&redirect_uri=${redirect}`;
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
				this.setWeixinShare(agent_id,true);
			}
		})
	}

	/**
	 * 微信分享
	 */
	wxShare(params={},callback){  
	    if(typeof wx === undefined) {
	    	return false;
	    }
	    //配置信息appId,nonceStr,signature,timestamp
	    let {agentid,title,desc,imgUrl,link,type} = params;
	    //console.log(agentid,'**')
	    wx.config({
	        debug       : false,
	        appId       : params.appId,
	        timestamp   : params.timestamp,
	        nonceStr    : params.nonceStr,
	        signature   : params.signature,
	        jsApiList   : [   // 接口列表
	            'onMenuShareTimeline',
	            'onMenuShareAppMessage',
	            'onMenuShareQQ',
	            'onMenuShareWeibo'
	        ]
	    });
	    
	    if(link.indexOf('agent_id=') === -1){
	        if(link.indexOf('?')!== -1){
	            link = link+'&agent_id='+agentid;
	        }else{
	            link = link+'?agent_id='+agentid;
	        }
	    }

	    let shareConfig = {
	        title: title, // 分享标题
	        desc: desc, // 分享描述
	        link: link, // 分享链接
	        imgUrl:imgUrl, // 分享图标
	        success: function() {
	            // 用户确认分享后执行的回调函数
	            callback&&callback({
	                type :type||'news',
	                title:title,
	                link:link,
	                desc:desc
	            });
	        }
	    }

	    //通过ready接口处理成功验证
	    wx.ready(function(){
	        //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
	        wx.onMenuShareTimeline(shareConfig);
	        //获取“分享给朋友”按钮点击状态及自定义分享内容接口
	        wx.onMenuShareAppMessage(shareConfig);
	        //获取“分享到QQ”按钮点击状态及自定义分享内容接口
	        wx.onMenuShareQQ(shareConfig);
	        //获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
	        wx.onMenuShareWeibo(shareConfig);
	    });
	}


	render() {
		return '';
	}
}

