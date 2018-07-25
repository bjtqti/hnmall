import React, {Component} from 'react'

export default class Copyright extends Component {
	 
	constructor(props) {
		super(props); 
	}

	render() {
		
		return (
			<div className="copy-right">
				<a target="_blank" href="http://www.miibeian.gov.cn">湘ICP备14013772-3</a>
				<a target="_blank" href="https://www.hnmall.com/icp.html">增值电信业务经营许可证:湘B2-20140095</a>
			</div>
		)
	}
}

