import React, {Component} from 'react'
import classNames from "classnames";
import {localCache,checkphone} from '../lib'

const CODE_NAME = '获取验证码';

export class Index extends Component {
	 
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.state = {
			codeText:CODE_NAME,
			isLoading:false,
			phoneNumber:'',
			cmsCode:''
		}
	}

	componentDidMount() {
		 
	}


	handleChange(event,stateName){
		let value = event.target.value;
		this.setState({
			[stateName]:value
		})
	}


	handleClick(e){
		let time = 60;
		let tid;
		let fn = (time)=>{
			let code = `${time}秒后重试`;
			if(time < 1){
				clearTimeout(tid);
				code = CODE_NAME;
				return false;
			}
			this.setState({
				codeText:code
			})
			//console.log(code)
			tid = setTimeout(()=>{
				fn(time-1)
			},1000)
		}
		fn(time);
	}

	handleLogin(){
		let {phoneNumber,cmsCode,isLoading} = this.state;
		
		if(isLoading){
			return false;
		}
		if(!checkphone(phoneNumber)){
			return false;
		}
		if(!cmsCode) {

			return false;
		}


		this.setState({
			isLoading:true
		})
		console.log(phoneNumber,cmsCode)
	}

	render() {
		let {phoneNumber,cmsCode,codeText,isLoading} = this.state;
		let codeSatus = classNames("code-text",{
			dis:codeText!==CODE_NAME
		})
		let loginStatus = classNames("submit-button",{
			dis:isLoading
		})
		return (
			<div className="app-wrap">
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
				<div className="bottom-area">
					<div className="icon-weixin"></div>
					<div className="weixin-lgoin">授权微信登陆</div>
				</div>
			</div>
		)
	}
}