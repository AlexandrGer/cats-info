const defaultState = {
	likedCards: []
}

const ADD_LIKED_CARD = 'ADD_LIKED_CARD';
const DELETE_LIKED_CARD = 'DELETE_LIKED_CARD';

export const likedCardReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_LIKED_CARD:
			return { ...state, likedCards: [...state.likedCards, action.payload] }
		case DELETE_LIKED_CARD:
			return { ...state, likedCards: state.likedCards.filter(likedCards => likedCards.id !== action.payload) }
		default:
			return state
	}
}

export const likedCardsAction = (payload) => ({ type: ADD_LIKED_CARD, payload })