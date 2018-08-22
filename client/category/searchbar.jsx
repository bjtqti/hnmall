import React, {Component} from 'react'
import {BASE_HOST} from '../common/constant'

export default class SearchBar extends Component {
	 
	constructor(props) {
		super(props); 
		this.state = {
			value:''
		}
	}

	componentDidMount(){
		
	}


	handleChange(e){
		let value = e.target.value;
		this.setState({value});
	}

	render() {
		return (
			<div className="app-search-box">
                <form action={`${BASE_HOST}wap/item-list.html`} method="post" className="search">
                	<i className="iconfont icon-zoom"></i>
                	<input type="text" name="search_keywords" value={this.state.value} onChange={(e)=>{this.handleChange(e)}} placeholder="搜索店内商品" />
                </form>
        	</div>
		)
	}
}

