import { catsFactsApi } from '../utils/CatsFactsApi';
import { addFactsAction } from '../store/factsReducer';

export const fetchFacts = () => {
	return function (dispatch) {
		catsFactsApi.getAllFacts().then(json => dispatch(addFactsAction(json)))
	}
}