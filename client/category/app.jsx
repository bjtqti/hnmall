import React, {Component} from 'react'
import classNames from "classnames";
import {isArray,localCache} from '../lib'
import {BASE_HOST} from '../common/constant'
import FootBar from '../commponents/footbar.jsx'
import Loading from '../commponents/loading.jsx'
import Share from '../commponents/share.jsx'
import SearchBar from '../commponents/searchbar.jsx';

export class Category extends Component {
	 

	constructor(props) {
		super(props);
		this.state = {
			activeIndex:0
		}
	}

	componentDidMount() {
		this.props.fetchCategory();
	}


	handleClick(index){
		if(this.state.activeIndex === index){
			return false;
		}
		 
		this.setState({
			activeIndex:index
		})
	}

	renderNav(category){
		let {activeIndex} = this.state;
		return category.map((item,i)=>{
			let active = classNames("category-name",{
				active :activeIndex===i
			})
			return (
				<div onClick={this.handleClick.bind(this,i)} className={active} key={item.id}>{item.name}</div>
			)
		})
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
		return category.map((item,i)=>{
			return (
				<div className="category-group" key={`g_${i}`}>
					<div className="category-nav-header">{item.name}</div>
					<div className="category-nav-list">
						{this.renderItem(item.children)}
					</div>
				</div>
			)
		})
	}

	render() {
		let {isFetching,categoryList} = this.props.category;
		const shareInfo = {
			title:'友阿微店--更高品质，便捷生活',
			desc:'友阿微店--更高品质，便捷生活',
			image:'https://www.hnmall.com/res/images/cplogo.jpg'
		};
		return (
			<div className="app-wrap">
				<SearchBar placeholder="搜索店内商品"/>
				<div className="category-container">
					<div className="category-nav">{this.renderNav(categoryList)}</div>
					<div className="category-main">{this.renderList(categoryList)}</div>
				</div>
				<FootBar />
				<Share info={shareInfo} />
				<Loading active={isFetching}/>
			</div>
		)
	}
}