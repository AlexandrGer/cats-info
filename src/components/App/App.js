import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchCards } from '../../asyncAction/cards';

function App() {

	// const dispatch = useDispatch();
	// const cards = useSelector(state => state.cards)

	// useEffect(() => {
	// 	dispatch(fetchCards());
	// }, [])

	return (
		<div className='page'>
			<Header />
			<Main />
		</div>
	);
}

export default App;
