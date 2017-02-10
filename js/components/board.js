import React from 'react';
import CardList from './list';

export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			changed: false,
			submitted: false
		};
		this.onAddInputChanged = this.onAddInputChanged.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}
	onAddSubmit(event) {
		event.preventDefault();
		console.log("button submitted");
		this.setState({
			submitted: true
		});
	}
	onAddInputChanged() {
		console.log("change made");
		this.setState({
			changed: true
		});
	}
	
	render() {
		return (
			<div className="board">
				<div className="board-title">Board Title</div>
				<CardList submitHandler={this.onAddSubmit} changeHandler={this.onAddInputChanged} />
			</div>
		);
	}
}