//list component
import React from 'react';
import Card from './card';

export default function CardList(props) {
	console.log(props);
	return (
		<div className="card-list" >
			<div className="list-title">{props.title}</div>
			<div className="card-contents">{props.cards}</div>
			<Card text={props.text} />
			<form onSubmit={props.submitHandler}>
				<input type="text" value={props.text} onChange={props.changeHandler}/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);		
}