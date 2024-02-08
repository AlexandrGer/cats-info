const defaultState = {
	cards: []
}

const ADD_ALL_CARDS = 'ADD_ALL_CARDS';
const DELETE_ONE_CARD = 'DELETE_ONE_CARD';
const PUT_LIKE = 'PUT_LIKE';
const REMOVE_LIKE = 'REMOVE_LIKE';

export const cardsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_ALL_CARDS:
			return { ...state, cards: [...state.cards, ...action.payload] }
		case DELETE_ONE_CARD:
			return { ...state, cards: state.cards.filter(cards => cards.id !== action.payload) }
		case PUT_LIKE:
			return {
				...state, cards: state.cards.map(card => {
					if (card.id === action.payload) {
						return {
							id: card.id,
							url: card.url,
							like: true
						}
					} else {
						return card
					}
				})
			}
		case REMOVE_LIKE:
			return {
				...state, cards: state.cards.map(card => {
					if ((card.id === action.payload) && (card.like === true)) {
						return {
							id: card.id,
							url: card.url,
							like: false
						}
					} else {
						return card
					}
				})
			}
		default:
			return state
	}
}

export const addCardsAction = (payload) => ({ type: ADD_ALL_CARDS, payload })