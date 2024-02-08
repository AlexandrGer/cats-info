import { Route, Routes } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import './App.css';
import { ViewPicture } from '../ViewPictures/ViewPicture';
import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchCards } from '../../asyncAction/cards';

function App() {

	const [selectedCard, setSelectedCard] = useState({
		url: '',
		text: '',
	});

	function handleCardClick(url, text) {
		setSelectedCard({
			url,
			text,
		});
	}

	return (
		<div className='page'>
			<Header />
			<Routes>
				<Route path='/cats-info/view' element={<ViewPicture
					card={selectedCard} />} />
				<Route path='/cats-info/' element={<Main
					onCardClick={handleCardClick} />} />
			</Routes>


			<Footer />
		</div>
	);
}

export default App;
