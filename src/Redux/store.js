import { createStore, combineReducers, compose } from "redux";
import SnackReducer from "./SnackReducer";
import { applyMiddleware } from 'redux';
import thunk from "redux-thunk";

export const reducers = combineReducers({
    snackbar: SnackReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;


