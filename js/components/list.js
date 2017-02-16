//list component
import React from 'react';
import Card from './card';

export default function CardList(props) {
	return (
		<div className="card-list" >
			<div className="list-title">{props.title}</div>

			<div className="card-contents">
				<Card text={props.text} />
			</div>

			<form onSubmit={props.submitHandler}>
				<input type="text" value={props.text} onChange={props.changeHandler}/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);		
}