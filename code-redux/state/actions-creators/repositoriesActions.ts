import axios from "axios";
import {Dispatch} from "redux";
import RepositoriesTypes from "../actions-types/repositoriesTypes";
import IRepositoriesActions from "../actions/repositories";

export const searchRepositories = (term: string) => async (dispatch: Dispatch<IRepositoriesActions>) => {
    dispatch({
        type: RepositoriesTypes.SEARCH_REPOSITORIES_START,
    })
    try {
        const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {
            params: {
                text: term,
            }
        });
        const libraries: string[] = data.objects.map((pkg: any) => pkg.package.name);

        dispatch({
            type: RepositoriesTypes.SEARCH_REPOSITORIES_SUCCESS,
            payload: libraries,
        })

    } catch (e) {
        dispatch({
            type: RepositoriesTypes.SEARCH_REPOSITORIES_ERROR,
            payload: e.message,
        })
    }
}