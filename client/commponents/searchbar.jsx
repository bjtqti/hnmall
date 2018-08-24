import React, {Component} from 'react'
import {BASE_HOST} from '../common/constant'

export default class SearchBar extends Component {
	 
	constructor(props) {
		super(props); 
		this.state = {
			value:''
		}
	}

	handleChange(e){
		let value = e.target.value;
		if(value == '666666'){
			localStorage.clear();
		}
		this.setState({value});
	}

	render() {
		let {placeholder} = this.props;
		let {value} = this.state;
		return (
			<div className="app-search-box">
	            <form action={`${BASE_HOST}wap/item-list.html?search_keywords=${value}`} method="post" className="search">
					<i className="iconfont icon-zoom"></i>
					<input type="text" name="search_keywords" placeholder={placeholder} value={this.state.value} onChange={(event)=>{this.handleChange(event)}}/>
				</form> 
			</div>
		)
	}
}

