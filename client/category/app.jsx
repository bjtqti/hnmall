import React, {Component} from 'react'
import classNames from "classnames";
import {isArray,localCache,fetchApi,isWechat,createNonceStr,parseUrl} from '../lib'
import {BASE_HOST,AGENTID,APPID,TOKEN} from '../common/constant'
import FootBar from '../commponents/footbar.jsx'
import Loading from '../commponents/loading.jsx'
import Share from '../commponents/share.jsx'
import SearchBar from '../commponents/searchbar.jsx';
//import IScroll from '../lib/iscroll-lite.js'
export class Category extends Component {
	 

	constructor(props) {
		super(props);
		this.state = {
			activeIndex:0
		}
	}

	componentDidMount() {
		this.props.fetchCategory();
		import('../lib/iscroll-lite.js').then((m)=>{
			let IScroll = m.default;
			this.leftScroll = new IScroll(this.refs.nav,{
				snap: 'li',
				tap:'click'
			});
			this.rightScroll = new IScroll(this.refs.list,{
				//preventDefault:false
				tap:'click'
			});
		});
		let agentid = localCache(AGENTID);
		if(!agentid){
			this.getUserInfo();
		}
		this.agentid= agentid;
	}

	componentDidUpdate(prevProps,prevState) {
		let prevIsFetched = prevProps.category.isFetched;
		let {isFetched} = this.props.category;
		let {activeIndex} = this.state;

		if(this.rightScroll){
			if(prevState.activeIndex !== activeIndex){
				this.rightScroll.refresh();
			}
			if(prevIsFetched !== isFetched){
				this.leftScroll.refresh();
				this.rightScroll.refresh();
			}
		}
	}

	handleClick(index){
		if(this.state.activeIndex === index){
			return false;
		}
		this.rightScroll.scrollTo(0,0);
		this.setState({
			activeIndex:index
		})
	}

	renderNav(category){
		let {activeIndex} = this.state;
		let items = category.map((item,i)=>{
			let active = classNames("category-name",{
				active :activeIndex===i
			})
			return (
				<li onClick={this.handleClick.bind(this,i)} className={active} key={item.id}>{item.name}</li>
			)
		});
		return (
			<ul className="item-wrap">{items}</ul>
		)
	}

	renderItem(list){
		if(!isArray(list)){
			return '';
		}
		return list.map((item,i)=>{
			let placeImg = `${BASE_HOST}res/images/cplogo.jpg`;
			let url = item.icon.replace(/^\//,BASE_HOST)||placeImg;
			return (
				<div className="category-nav-item" key={`r_${i}`}>
					<a href={`${BASE_HOST}wap/item-list.html?cat_id=${item.id}`}>
						<img src={url} />
						<span className="name">{item.name}</span>
					</a>
				</div>
			)
		})
	}

	renderList(categoryList){
		let {activeIndex} = this.state;
		if(!isArray(categoryList) || !categoryList[activeIndex]){
			return '';
		}
		let category = categoryList[activeIndex].children;
		let sliders = category.map((item,i)=>{
			return (
				<div className="category-group" key={`g_${i}`}>
					<div className="category-nav-header">{item.name}</div>
					<div className="category-nav-list">
						{this.renderItem(item.children)}
					</div>
				</div>
			)
		});
		return (
			<div className="item-wrap">{sliders}</div>
		)
	}

	getUserInfo(){
		if(!isWechat()){
			return false;
		}
		let code = parseUrl('code');
		if(!code){
			let state = createNonceStr(16);
			let redirect = encodeURIComponent(window.location.href);
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

	render() {
		let {isFetching,isFetched,categoryList} = this.props.category;
		const shareInfo = {
			agentid:this.agentid,
			title:'友阿微店--更高品质，便捷生活',
			desc:'友阿微店--更高品质，便捷生活',
			image:'https://www.hnmall.com/res/images/cplogo.jpg'
		};
		 
		return (
			<div className="app-wrap">
				<SearchBar placeholder="搜索店内商品"/>
				<div className="category-container">
					<div ref="nav" className="category-nav">{this.renderNav(categoryList)}</div>
					<div ref="list" className="category-main">{this.renderList(categoryList)}</div>
				</div>
				<FootBar />
				<Share info={shareInfo} />
				<Loading active={isFetching}/>
			</div>
		)
	}
}