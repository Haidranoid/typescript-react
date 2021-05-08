import {RepositoriesTypes} from "../types";

export interface IRepositoriesActionStart {
    type: RepositoriesTypes.SEARCH_REPOSITORIES_START,
}

export interface IRepositoriesActionSuccess {
    type: RepositoriesTypes.SEARCH_REPOSITORIES_SUCCESS,
    payload: string[],
}

export interface IRepositoriesActionError {
    type: RepositoriesTypes.SEARCH_REPOSITORIES_ERROR,
    payload: string,
}

export type IRepositoriesActions = IRepositoriesActionStart | IRepositoriesActionSuccess | IRepositoriesActionError;