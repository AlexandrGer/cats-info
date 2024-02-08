import React from 'react';
import './Footer.css';

export const Footer = () => {
	return (

		<footer className="footer">
			<div className='footer__container'>
				<p className='footer__copyright'>© Герасимов Александр, 2024</p>
				<div className='footer__links'>
					<a href="https://github.com/AlexandrGer" target='blank' className='footer__link'>Github</a>
				</div>
			</div>

		</footer>

	)
}