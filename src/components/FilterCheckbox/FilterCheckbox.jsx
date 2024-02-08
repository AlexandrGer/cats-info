import React, { useState } from 'react';
import './FilterCheckbox.css';

export const FilterCheckbox = ({ value, onChange }) => {

	return (
		<div className="filter-checkbox">
			<label className="filter-checkbox__switch" >
				<input
					className='filter-checkbox__input'
					id='checkbox'
					name='likedFacts'
					type="checkbox"
					checked={value || false}
					onChange={onChange} />
				<span className="filter-checkbox__slider"></span>
			</label>
			<label className="filter-checkbox__text" htmlFor="checkbox">Понравившиеся факты</label>
		</div>
	);
}