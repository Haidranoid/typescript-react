import {combineReducers} from "redux";
import repositoriesReducer from "../reducers/repositoriesReducer";

const rootReducer = combineReducers({
    repositories: repositoriesReducer,
})

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
