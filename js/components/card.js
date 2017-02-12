// Card component
import React from 'react';

export default function Card(props) {
	console.log(props);
	return (
		<div className='cards'>{props.text}</div>
		);
	}