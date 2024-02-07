const defaultState = {
	cards: []
}

const ADD_ALL_CARDS = 'ADD_ALL_CARDS';

export const cardsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_ALL_CARDS:
			return { ...state, cards: [...state.cards, ...action.payload] }
		default:
			return state
	}
}

export const addCardsAction = (payload) => ({ type: ADD_ALL_CARDS, payload })