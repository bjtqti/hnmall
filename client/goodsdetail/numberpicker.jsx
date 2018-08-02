import React, {Component} from 'react'

export default class NumberPicker extends Component {
	 
	constructor(props) {
		super(props);
		this.state = {
			value:props.value
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleDecrease = this.handleDecrease.bind(this);
		this.handleIncrease = this.handleIncrease.bind(this);
	}

	handleChange(e){
		e && e.preventDefault();
		let {onChange,minimum,maximum} = this.props;
		let value = parseInt(e.target.value)||0;
		//console.log(value)
		if(value > maximum){
			value = maximum;
		}
		if(value < minimum){
			value = minimum;
		}
		this.setState({
			value
		},()=>{
			onChange(value)
		})
	}

	handleIncrease(){
		let {value} = this.state;
		let {maximum,step,onPlus} = this.props;
		if(maximum !== null && value >= maximum){
			onPlus(value)
			return;
		}
		value += step;
		this.setState({
			value:value
		},()=>{
			onPlus(value)
		})
	}

	handleDecrease(){
		let {value} = this.state;
		let {minimum,onMinus,step} = this.props;
		if(minimum !== null && value <= minimum){
			onMinus(value)
			return;
		}
		value -= step;
		this.setState({
			value
		},()=>{
			onMinus(value)
		})
	}
	 
	render() {
		let {value} = this.state;
		return (
			<div className="number-pick">
				<div className="picker flex">
					<div className="minus" onClick={this.handleDecrease}>-</div>
					<div className="value">
						<input type="number" value={value} onChange={this.handleChange}/>
					</div>
					<div className="plus" onClick={this.handleIncrease}>+</div>
				</div>
			</div>
		)
	}
}

NumberPicker.defaultProps = {
    value:1,
    minimum:1,
    maximum:null,
    step:1,
    onPlus:()=>{},
    onMinus:()=>{},
    onChange:function(){}
};