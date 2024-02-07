const defaultState = {
	cards: []
}

const ADD_ALL_CARDS = 'ADD_ALL_CARDS';
const DELETE_ONE_CARD = 'DELETE_ONE_CARD';

export const cardsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_ALL_CARDS:
			return { ...state, cards: [...state.cards, ...action.payload] }
		case DELETE_ONE_CARD:
			return { ...state, cards: state.cards.filter(cards => cards.id !== action.payload) }
		default:
			return state
	}
}

export const addCardsAction = (payload) => ({ type: ADD_ALL_CARDS, payload })