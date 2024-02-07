import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { cardsReducer } from "./cardsReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

export const store = configureStore({ reducer: cardsReducer }, composeWithDevTools(applyMiddleware(thunk)));