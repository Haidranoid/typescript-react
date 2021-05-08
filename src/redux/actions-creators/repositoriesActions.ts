import axios from "axios";
import {Dispatch} from "redux";
import {RepositoriesTypes} from "../types";
import {
    IRepositoriesActions,
    IRepositoriesActionStart,
    IRepositoriesActionSuccess,
    IRepositoriesActionError
} from "../actions/repositories";

export const searchRepositories = (term: string) => async (dispatch: Dispatch<IRepositoriesActions>) => {
    dispatch(searchRepositoriesStart())
    try {
        const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {
            params: {
                text: term,
            }
        });
        const libraries: string[] = data.objects.map((pkg: any) => pkg.package.name);

        dispatch(searchRepositoriesSuccess(libraries))
    } catch (e) {
        dispatch(searchRepositoriesError(e.message))
    }
}

export const searchRepositoriesStart = (): IRepositoriesActionStart => {
    return {
        type: RepositoriesTypes.SEARCH_REPOSITORIES_START,
    }
}

export const searchRepositoriesSuccess = (payload: string[]): IRepositoriesActionSuccess => {
    return {
        type: RepositoriesTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload,
    }
}

export const searchRepositoriesError = (error: string): IRepositoriesActionError => {
    return {
        type: RepositoriesTypes.SEARCH_REPOSITORIES_ERROR,
        payload: error,
    }
}