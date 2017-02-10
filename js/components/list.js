//list component
import React from 'react';
import Card from './card';

export default function CardList(props) {
	return (
		<div className="card-list">
			<div className="list-title">List Title</div>
			<Card text="I'm a card." />
			<form onSubmit={props.submitHandler}>
				<input type="text" onChange={props.changeHandler}/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);		
}