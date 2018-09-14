import React, {Component} from 'react'
import AppBar from '../commponents/appbar.jsx'
import Headerbar from './headerbar.jsx'
import BannerSwiper from './bannerswiper.jsx'
import NavMenu from './navmenu.jsx'
import TextSwiper from './textswiper.jsx'
import Shop from './shop.jsx'
import Widget from './widget.jsx'
import FootBar from '../commponents/footbar.jsx'
import GoodsList from './goodslist.jsx'
import Copyright from '../commponents/copyright.jsx'
import GoTop from '../commponents/gotop.jsx'
import Share from '../commponents/share.jsx'

export class Index extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//let token = localCache(TOKEN);
		this.props.fetchIndexModules();
	}

	/**
	 * 首页挂件
	 */
	renderWidgets(){
		let {modules,more_url} = this.props.index;
		let widgets = [];
		//console.log(modules,more_url)
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
		//console.log(this.props)
		let widgets = this.renderWidgets();
		const shareInfo = {
			title:'友阿微店--更高品质,便捷生活',
			desc:'友阿微店--更高品质,便捷生活',
			image:'https://www.hnmall.com/images/3a/e5/c5/076ec271495f7494427fad42f6c0d2443189019b.jpg'
		};
		//插入线下门店
		widgets.splice(3,0,<Shop {...this.props} key={'shop'}/>);

		return (
			<div className="app-wrap">
				<AppBar/>
				<Headerbar {...this.props}/>
				{widgets}
				<GoodsList {...this.props}/>
				<FootBar />
				<Copyright />
				<GoTop />
				<Share info={shareInfo}/>
			</div>
		)
	}
}