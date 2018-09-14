import React, {Component} from 'react'
import classNames from "classnames";
import {isArray,localCache} from '../lib'
import FootBar from '../commponents/footbar.jsx'
import Loading from '../commponents/loading.jsx'
import Share from '../commponents/share.jsx'
import SearchBar from '../commponents/searchbar.jsx';
import config from '../../share/config.js'
import {AGENTID} from '../common/constant'
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
				//preventDefault:false,
				tap:'click'
			});
		});
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

	handleNaviget(id){
		let aid = localCache(AGENTID);
		let url = `${config.host}wap/item-list.html?cat_id=${id}`;
		url += aid ? `&agent_id=${aid}`:'';
		location.href=url;
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
			let placeImg = `${config.host}res/images/cplogo.jpg`;
			let icon = item.icon||placeImg;
			return (
				<div onClick={this.handleNaviget.bind(this,item.id)} className="category-nav-item" key={`r_${i}`}>
					<span>
						<img src={icon} />
						<span className="name">{item.name}</span>
					</span>
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

	render() {
		let {isFetching,isFetched,categoryList} = this.props.category;
		const shareInfo = {
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