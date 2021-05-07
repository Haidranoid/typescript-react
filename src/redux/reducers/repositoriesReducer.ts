import {
    SEARCH_REPOSITORIES,
    SEARCH_REPOSITORIES_SUCCESS,
    SEARCH_REPOSITORIES_ERROR
} from "../types";

const initialState = {
    data: [],
    loading: false,
    error: false,
}

const repositoriesReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SEARCH_REPOSITORIES:
            return {
                loading: true,
                error: false,
            }

        case SEARCH_REPOSITORIES_SUCCESS:
            return {
                loading: true,
                error: false,
            }

        case SEARCH_REPOSITORIES_ERROR:
            return {
                loading: true,
                error: false,
            }

        default:
            return state;
    }
}

export default repositoriesReducer;