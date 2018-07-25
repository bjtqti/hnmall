import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {BASE_HOST} from '../common/constant'

export default class NavMenu extends Component {
	static propTypes = {
		icons: PropTypes.array
	}

	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	formatMenuData(){
		let data = [];
		let {icons} = this.props;
		const app = [
			null,`${BASE_HOST}wap/itemlist.html?type=new`,
			null,null,`${BASE_HOST}wap/s-coupon.html`,
			`${BASE_HOST}seckill/index.php`
		]
		icons.forEach((item,i)=>{
			let nav = {...item};
			nav.image = item.image.replace(/^\//,BASE_HOST);
			if(item.linktype==='cat'){
				nav.linktarget = `${BASE_HOST}wap/item-list.html?cat_id=${item.linktarget}`;
			}else if(item.linktype==='app'){
				nav.linktarget=app[i];
			}
			data.push(nav)
		})
		return data;
	}

	renderMenu(){
		let icons = this.formatMenuData();
		return icons.map((d,i)=>{
			return (
				<div className="nav-menu-item" key={i}>
					<a href={d.linktarget}>
						<img className="nav-menu-icon" src={d.image} alt={d.tag}/>
						<span className="nav-menu-text">{d.tag}</span>
					</a>
				</div>
			)
		})
	}

	render() {
		return (
			<div className="nav-menu">
				{this.renderMenu()}
			</div>
		)
	}
}