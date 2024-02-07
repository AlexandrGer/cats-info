import React, { useState } from 'react';
import { cats } from '../../utils/cats';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCards } from '../../asyncAction/cards';
import './Cards.css';


export const Cards = () => {

	const dispatch = useDispatch();
	const cards = useSelector(state => state.cards);

	useEffect(() => {
		dispatch(fetchCards());
	}, []);

	console.log(cards);
	return (
		<section className='cards'>
			<ul className='cards__list'>
				{cards.map((cat, index) =>
					<li className='card' key={cat.id}>
						<img src={cat.url} alt="sad" className='card__img' />
						<button className='button button__delete'></button>
						<div className='card__container'>
							<h2 className='card__title'>{`Интересный факт №` + (index + 1)}</h2>
							<p className='card__description'>У кошек более 20 мышц, которые управляют их ушами</p>
							<button className='button button__toggle-like'></button>
						</div>
					</li>
				)}
			</ul>
		</section>
	);
};