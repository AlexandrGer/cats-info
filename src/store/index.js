import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { cardsReducer } from "./cardsReducer";
import { factsReducer } from "./factsReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
	cards: cardsReducer,
	facts: factsReducer,
})

export const store = configureStore({ reducer: rootReducer }, composeWithDevTools(applyMiddleware(thunk)));