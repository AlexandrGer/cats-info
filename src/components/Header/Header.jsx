import React from 'react';
import './Header.css';
import logo from '../../images/finderCat-logo.png';

export const Header = () => {

	return (
		<header className='header'>
			<img src={logo} alt="logo" className='logo header__logo' />
		</header >
	)
}