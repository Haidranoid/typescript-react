import RepositoriesTypes from "../actions-types/repositoriesTypes";
import IRepositoriesActions from "../actions/repositories"

export interface IRepositoriesState {
    data: string[],

    loading: boolean,
    error: string | null,
}

const initialState: IRepositoriesState = {
    data: [],

    loading: false,
    error: null,
}

const repositoriesReducer = (
    state: IRepositoriesState = initialState,
    action: IRepositoriesActions
): IRepositoriesState => {

    switch (action.type) {
        case RepositoriesTypes.SEARCH_REPOSITORIES_START:

            return {
                ...state,

                loading: true,
                error: null,
            }

        case RepositoriesTypes.SEARCH_REPOSITORIES_SUCCESS:
            return {
                data: action.payload,

                loading: false,
                error: null,
            }

        case RepositoriesTypes.SEARCH_REPOSITORIES_ERROR:
            return {
                ...state,

                loading: false,
                error: action.payload,
            }

        default:
            return state;
    }
}

export default repositoriesReducer;