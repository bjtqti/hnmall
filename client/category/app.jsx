import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from "classnames";
import {isArray,localCache} from '../lib'
import {BASE_HOST} from '../common/constant'
import FootBar from '../commponents/footbar.jsx'
import Loading from '../commponents/loading.jsx'
export class Index extends Component {
	static propTypes = {
		initialState: PropTypes.array
	}

	constructor(props) {
		super(props);
		this.state = {
			categoryList:props.initialState,
			isLoading:true,
			activeIndex:0,
			value:''
		}
	}

	componentDidMount() {
		let cache = localCache('category');
		if(cache){
			this.setState({
				isLoading:false,
				categoryList:cache
			})
		}else{
			this.fetchCategoryList()
		}
	}

	fetchCategoryList(){
		axios.get('/category/list').then((res)=>{
			console.log(res.data)
			if(res.data && res.data.categoryList){
				//this.props.initialState = res.data.categoryList;
				localCache('category',res.data.categoryList)
				this.setState({
					isLoading:false,
					categoryList:res.data.categoryList
				})
			}
		})
	}

	handleChange(event){
		let value = event.target.value;
		this.setState({value});
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
				<div onClick={this.handleClick.bind(this,i)} className={active} key={i}>{item.name}</div>
			)
		})
	}

	renderItem(list){
		if(!isArray(list)){
			return '';
		}
		return list.map((item,i)=>{
			let url = item.icon.replace(/^\//,BASE_HOST);
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

	renderList(category){
		//console.log(category)
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

	renderCategory(){
		let {categoryList,activeIndex} = this.state
		if(categoryList.length < 1){
			return '';
		}
		let category = categoryList[activeIndex].children;
		return (
			<div className="category-container">
				<div ref="nav" className="category-nav">{this.renderNav(categoryList)}</div>
				<div className="category-main">{this.renderList(category)}</div>
			</div>
		)
	}

	render() {
		//console.log(this.props.initialState)
		return (
			<div className="app-wrap">
				<div className="app-search-box">
	                <form action={`${BASE_HOST}wap/item-list.html`} method="post" className="search">
	                	<input type="text" value={this.state.value} onChange={(e)=>{this.handleChange(e)}} placeholder="搜索店内商品" />
	                </form>
            	</div>
				{this.renderCategory()}
				<FootBar />
				<Loading name="spinner" active={this.state.isLoading}/>
			</div>
		)
	}
}