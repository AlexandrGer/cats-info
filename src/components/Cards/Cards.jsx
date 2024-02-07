import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCards } from '../../asyncAction/cards';
import { fetchFacts } from '../../asyncAction/cards';
import './Cards.css';


export const Cards = () => {

	const dispatch = useDispatch();
	const cards = useSelector(state => state.cards.cards);
	const facts = useSelector(state => state.facts.facts);

	useEffect(() => {
		dispatch(fetchCards());
		dispatch(fetchFacts());
	}, []);

	const removeCard = (cards) => {
		dispatch({ type: 'DELETE_ONE_CARD', payload: cards.id })
	}

	const factsArray = facts.data;

	return (
		<section className='cards'>
			<ul className='cards__list'>
				{cards.map((cat, index) =>
					<li className='card' key={cat.id}>
						<img src={cat.url} alt="sad" className='card__img' />
						<button className='button button__delete' onClick={() => removeCard(cat)}></button>

						<h2 className='card__title'>{`Интересный факт №` + (index + 1)}</h2>
						<div className='card__container'>
							<p className='card__description'>{factsArray[index]}</p>
							<button className='button button__toggle-like'></button>
						</div>
					</li>
				)}
			</ul>
		</section>
	);
};