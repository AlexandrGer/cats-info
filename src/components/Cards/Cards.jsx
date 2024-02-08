import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCards } from '../../asyncAction/cards';
import { fetchFacts } from '../../asyncAction/cards';
import './Cards.css';
import { Link } from 'react-router-dom';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { cats } from '../../utils/cats';

export const Cards = ({ onCardClick }) => {

	const dispatch = useDispatch();
	const cards = useSelector(state => state.cards.cards);
	const facts = useSelector(state => state.facts.facts);
	const likedFacts = useSelector(state => state.likedCards.likedCards);

	useEffect(() => {
		dispatch(fetchCards());
		dispatch(fetchFacts());
	}, []);

	const removeCard = (cards) => {
		dispatch({ type: 'DELETE_ONE_CARD', payload: cards.id })
	}

	const likeCard = (card) => {
		dispatch({ type: 'ADD_LIKE_CARD', payload: card })
	}

	const factsArray = facts.data;

	const handleClick = (card) => {
		onCardClick(card.target.src,
			card.target.nextSibling.nextSibling.innerText);
	}

	const [value, setValue] = useState(false);

	const handleFilter = () => {
		if (value === true) {
			setValue(false);
		} else {
			setValue(true)
		}
	}

	return (
		<section className='cards'>
			<FilterCheckbox
				onChange={handleFilter}
				value={value} />

			{value ?
				likedFacts.length > 0 ?
					<ul className='cards__list'>
						{likedFacts.map((cat, index) =>
							<li className='card' key={cat.id}>
								<Link to='/cats-info/view' className='cards__link' onClick={handleClick}>
									<img src={cat.url} alt="sad" className='card__img' />

									<h2 className='card__title'>{`Интересный факт №` + (index + 1)}</h2>
									<div className='card__container'>
										<p className='card__description'>{factsArray[index]}</p>
									</div>
								</Link>
								<button className='button button__delete' onClick={() => removeCard(cat)}></button>
								<button className='button button__toggle-like'></button>
							</li>)}
					</ul> :
					<p> Кажется вам еще не приглянулся никакой факт...</p> :
				<ul className='cards__list'>

					{cards.map((cat, index) =>

						<li className='card' key={cat.id}>
							<Link to='/cats-info/view' className='cards__link' onClick={handleClick}>
								<img src={cat.url} alt="sad" className='card__img' />

								<h2 className='card__title'>{`Интересный факт №` + (index + 1)}</h2>
								<div className='card__container'>
									<p className='card__description'>{factsArray[index]}</p>
								</div>
							</Link>
							<button className='button button__delete' onClick={() => removeCard(cat)}></button>
							<button className='button button__toggle-like' onClick={() => likeCard(cat)}></button>
						</li>

					)}

				</ul>
			}
		</section >
	);
};