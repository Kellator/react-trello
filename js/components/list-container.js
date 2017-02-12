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
	}
	render() {
		return (
			<div className='list-container'>
				<CardList submitHandler={this.onAddSubmit} changeHandler={this.onAddInputChanged} />
			</div>
		);
	}
}