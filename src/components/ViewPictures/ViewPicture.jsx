import React from 'react';
import './ViewPicture.css';
import { useNavigate } from 'react-router-dom';

export const ViewPicture = ({ card }) => {
	const history = useNavigate();

	function handleClick() {
		history(-1);
	}
	return (
		<section className='view-picture'>
			<img src={card.url} alt="" className='view-picture__image' />
			<p className='view-picture__text'>{card.text}</p>
			<button className='button button__back' onClick={handleClick}>Вернуться обратно</button>
		</section>
	)
}