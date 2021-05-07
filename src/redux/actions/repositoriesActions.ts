import {
    SEARCH_REPOSITORIES,
    SEARCH_REPOSITORIES_SUCCESS,
    SEARCH_REPOSITORIES_ERROR
} from "../types";

export const searchRepositories = () => ({
    type: SEARCH_REPOSITORIES,
    payload: undefined,
})

export const searchRepositoriesSuccess = () => (dispatch: any) => {
    return {
        type: SEARCH_REPOSITORIES_SUCCESS,
        payload: undefined,
    }
}

export const searchRepositoriesError = () => (dispatch: any) => {
    return {
        type: SEARCH_REPOSITORIES_ERROR,
        payload: undefined,
    }
}