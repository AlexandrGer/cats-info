import { catsCardApi } from '../utils/CatsImageApi';
import { catsFactsApi } from '../utils/CatsFactsApi';
import { addCardsAction } from '../store/cardsReducer';
import { addFactsAction } from '../store/factsReducer';

export const fetchCards = () => {
	return function (dispatch) {
		catsCardApi.getAllCards().then(json => {
			const newArray = json.map((value) => {
				return {
					id: value.id,
					url: value.url,
					like: false
				}
			})
			dispatch(addCardsAction(newArray))
		})
	}
}

export const fetchFacts = () => {
	return function (dispatch) {
		catsFactsApi.getAllFacts().then(json => dispatch(addFactsAction(json)))
	}
}