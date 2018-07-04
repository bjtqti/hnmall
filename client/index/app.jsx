import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AppBar from './appbar'
import SearchBar from './searchbar'
import BannerSwiper from './bannerswiper'
import NavMenu from './navmenu'
import TextSwiper from './textswiper'
import Widget from './widget'
import FootBar from './footbar'
import GoodsList from './goodslist'
import Copyright from './copyright'
import GoTop from './gotop'

export class Index extends Component {

	static propTypes = {
		initialState: PropTypes.object
	}

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		 
	}

	renderWidgets(){
		let {modules,more_url} = this.props.initialState;
		let widgets = [];
		modules.forEach((module,i)=>{
			switch(module.widget){
				case 'slider':
					widgets.push(<BannerSwiper sliders={module.params.pic} key={`slider_${i}`}/>);
					break;
				case 'icons_nav':
					widgets.push(<NavMenu icons={module.params.pic} key={`nav_${i}`}/>);
					break;
				case 'ad_content':
					widgets.push(<TextSwiper message={module.params.ad_content} more={more_url} key={`ad_${i}`}/>);
					break;
				case 'floor':
					widgets.push(<Widget params={module.params} key={`floor_${i}`}/>);
					break;
				default:
					break;
			}
			
		})
		return widgets;
	}

	render() {
		//console.log(this.props.initialState)
		return (
			<div className="app-wrap">
				<AppBar />
				<SearchBar />
				{this.renderWidgets()}
				<GoodsList />
				<FootBar />
				<Copyright />
				<GoTop />
			</div>
		)
	}
}