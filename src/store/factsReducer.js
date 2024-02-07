const defaultState = {
	facts: []
}


const ADD_ALL_FACTS = 'ADD_ALL_FACTS';

export const factsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_ALL_FACTS:
			return { ...state, facts: { ...state.facts, ...action.payload } }
		default:
			return state
	}
}

export const addFactsAction = (payload) => ({ type: ADD_ALL_FACTS, payload })