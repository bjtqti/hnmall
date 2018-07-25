import React, {Component} from 'react'
import classNames from "classnames";
import {localCache,checkphone,fetchApi,setCookie,createNonceStr} from '../lib'
import {TOKEN} from  '../common/constant'
import Alert from '../commponents/alert.jsx'
import Loading from '../commponents/loading.jsx'

const CODE_NAME = '获取验证码';

export class Index extends Component {
	 
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleSingin = this.handleSingin.bind(this);
		this.state = {
			message:'',
			codeText:CODE_NAME,
			isLoading:false,
			phoneNumber:'',
			cmsCode:''
		}
	}

	componentDidMount() {
		let token = localCache(TOKEN);
		 
	}

	hanldeBack(){
		history.back();
	}

	handleChange(event,stateName){
		let value = event.target.value;
		this.setState({
			[stateName]:value
		})
	}

	handleClose(){
		this.setState({
			message:''
		})
	}

	handleSendSms(){
		let {phoneNumber} = this.state;
		fetchApi('/login/sms',{
			method:'POST',
			data:{
				phone:phoneNumber
			}
		}).then((res)=>{
			if(res.msg){
				this.setState({
					message:res.msg
				})
			}
		})
	}

	handleClick(e){
		let {phoneNumber,codeText} = this.state;
		if(codeText !== CODE_NAME){
			return false;
		}
		if(!checkphone(phoneNumber)){
			this.setState({
				message:'电话号码不正确'
			})
			return false;
		}
		let time = 60,
			tid;
		let fn = (time)=>{
			let text = `${time}秒后重试`;
			if(time < 1){
				clearTimeout(tid);
				text = CODE_NAME;
			}
			this.setState({
				codeText:text
			})
			tid = setTimeout(()=>{
				fn(time-1)
			},1000)
		}
		fn(time);
		this.handleSendSms();
	}

	/**
	 * 微信登录
	 */

	handleSingin(){
		let {appId} = this.props.initialState;
		let redirect = 'https://m.hnmall.com';
		let state = createNonceStr();
		let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirect}&response_type=code&scope=snsapi_userinfo&state=${state}&connect_redirect=1#wechat_redirect`
		//console.log(url);
		location.href=url;
	}

	/**
	 * 短信登录
	 */ 
	handleLogin(){
		let {phoneNumber,cmsCode,isLoading} = this.state;
		 
		if(isLoading){
			return false;
		}
		if(!checkphone(phoneNumber)){
			this.setState({
				message:'电话号码不正确'
			})
			return false;
		}
		if(!cmsCode) {
			this.setState({
				message:'请填写短信验证码'
			})
			return false;
		}

		this.setState({
			isLoading:true
		})

		fetchApi('/login/sign',{
			method:"POST",
			data:{
				phone:phoneNumber,
				code:cmsCode
			}
		}).then((res)=>{
			console.log(res)
			this.setState({
				isLoading:false
			})
			//let {accessToken,agent_id,grade_id,grade_name,headurl,is_bind_weixin,name,user_id,mobile,sex} = res.data;
			if(res.code===0){
				localCache(TOKEN,res.accessToken,30);
				location.href="/";
				return;
			}else{
				this.setState({
					message:res.msg,
				})
			}
		})
		//console.log(phoneNumber,cmsCode)
	}

	render() {
		let {phoneNumber,cmsCode,codeText,isLoading,message} = this.state;
		let codeSatus = classNames("code-text",{
			dis:codeText!==CODE_NAME
		})
		let loginStatus = classNames("submit-button",{
			dis:isLoading
		})
		return (
			<div className="app-wrap">
				<div className="header">
					<i onClick={this.hanldeBack} className="iconfont icon-zuo icon-back"></i>
					<span>登录</span>
				</div>
				<div className="form">
					<div className="form-item">
						<label className="tag-label">手机号：</label>
						<input className="phone-value" value={phoneNumber} onChange={(e)=>{this.handleChange(e,'phoneNumber')}} type="tel" placeholder="请输入您的手机号"/>
					</div>
					<div className="form-item">
						<label className="tag-label">验证码：</label>
						<input className="cms-value" onChange={(e)=>{this.handleChange(e,'cmsCode')}} placeholder="请输入短信验证码"/>
						<span onClick={this.handleClick} className={codeSatus}>{codeText}</span>
					</div>
					<button className={loginStatus} onClick={this.handleLogin}>登录</button>
				</div>
				<div onClick={this.handleSingin} className="bottom-area">
					<div className="icon-weixin"></div>
					<div className="weixin-lgoin">授权微信登陆</div>
				</div>
				<Alert message={message} close={this.handleClose}/>
				<Loading active={isLoading}/>
			</div>
		)
	}
}