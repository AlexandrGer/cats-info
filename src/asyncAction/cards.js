import { catsCardApi } from '../utils/CatsImageApi';
import { addCardsAction } from '../store/cardsReducer';

export const fetchCards = () => {
	return function (dispatch) {
		catsCardApi.getAllCards().then(json => dispatch(addCardsAction(json)))
	}
}