import { createStore, applyMiddleware } from "redux";
import rootReducer from './redux/root-reducer'

export const store = createStore(rootReducer)