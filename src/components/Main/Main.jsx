import React from 'react';
import './Main.css';
import { Cards } from '../Cards/Cards';
// import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { Promo } from '../Promo/Promo';

export const Main = ({ onCardClick }) => {

	return (
		<main className='main'>
			<Promo />
			{/* <FilterCheckbox /> */}
			<Cards
				onCardClick={onCardClick} />
		</main>

	)
}