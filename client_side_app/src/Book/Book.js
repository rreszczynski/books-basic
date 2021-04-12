import React from 'react';
import './Book.css';

function book(props) {
	return (
		<div className="container">
			<li>
				<span>"{props.title}", </span>
				<span>{props.author.first_name} </span>
				<span>{props.author.last_name}</span>
			</li>
		</div>
	)
}

export default book