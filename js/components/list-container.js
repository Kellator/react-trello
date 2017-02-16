//list container component
import React from 'react';
import CardList from './list';

export default class ListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			cards: []
		};
		this.onAddInputChanged = this.onAddInputChanged.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}
	onAddSubmit(event) {
		event.preventDefault();
		var newCardsArray = this.state.cards.slice();
		newCardsArray.push(this.state.text);
		this.setState({
			submitted: true,
			cards: newCardsArray
		});
	}
	onAddInputChanged(event) {
		this.setState({
			text: event.target.value,
			changed: true
		});
	}
	render() {
		console.log(this.state);
		return (
			<div className='list-container'>
				<CardList text={this.state.text} cards={this.state.cards} 
				submitHandler={this.onAddSubmit} changeHandler={this.onAddInputChanged}/>
			</div>
		);
	}
}