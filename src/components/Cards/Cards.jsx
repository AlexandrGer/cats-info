import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCards } from '../../asyncAction/cards';
import { fetchFacts } from '../../asyncAction/cards';
import './Cards.css';
import { Link } from 'react-router-dom';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';

export const Cards = ({ onCardClick }) => {

	const dispatch = useDispatch();
	const cards = useSelector(state => state.cards.cards);
	const facts = useSelector(state => state.facts.facts);
	const likedFacts = useSelector(state => state.likedCards.likedCards);

	useEffect(() => {
		dispatch(fetchCards());
		dispatch(fetchFacts());
	}, []);

	const removeCard = (card) => {
		dispatch({ type: 'DELETE_ONE_CARD', payload: card.id })
	}

	const deleteLikedCard = (card) => {
		dispatch({ type: 'DELETE_LIKED_CARD', payload: card.id })
		dispatch({ type: 'REMOVE_LIKE', payload: card.id })
	}

	const likeCard = (card) => {
		if (card.like === false) {
			const newCard = {
				id: card.id,
				url: card.url,
				like: true,
			}
			dispatch({ type: 'ADD_LIKED_CARD', payload: newCard })
			dispatch({ type: 'PUT_LIKE', payload: card.id })
		} else {
			dispatch({ type: 'DELETE_LIKED_CARD', payload: card.id })
			dispatch({ type: 'REMOVE_LIKE', payload: card.id })

		}


	}

	const factsArray = facts.data;

	const handleClick = (card) => {
		onCardClick(
			card.target.src,
			card.target.nextSibling.nextSibling.innerText
		);
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
								<button className='button button__delete' onClick={() => deleteLikedCard(cat)}></button>
								<button
									className={cat.like ? 'button button__like button__like_active' : 'button button__like'}
									onClick={() => {
										likeCard(cat);
									}} />
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
							<button
								className={cat.like ? 'button button__like button__like_active' : 'button button__like'}
								onClick={() => {
									likeCard(cat);
								}}
							/>
						</li>
					)}

				</ul>
			}
		</section >
	);
};