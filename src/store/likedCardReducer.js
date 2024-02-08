const defaultState = {
	likedCards: []
}

const ADD_LIKE_CARD = 'ADD_LIKE_CARD';

export const likedCardReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_LIKE_CARD:
			return { ...state, likedCards: [...state.likedCards, action.payload] }
		default:
			return state
	}
}

export const likedCardsAction = (payload) => ({ type: ADD_LIKE_CARD, payload })