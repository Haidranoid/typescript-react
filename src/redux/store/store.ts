import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

import repositoriesReducer from "../reducers/repositoriesReducer";


const rootReducer = combineReducers({
    repositories: repositoriesReducer,
})

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export default store;