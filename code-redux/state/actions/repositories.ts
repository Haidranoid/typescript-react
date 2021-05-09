import RepositoriesTypes from "../actions-types/repositoriesTypes";

interface ISearchRepositoriesActionStart {
    type: RepositoriesTypes.SEARCH_REPOSITORIES_START,
}

interface ISearchRepositoriesActionSuccess {
    type: RepositoriesTypes.SEARCH_REPOSITORIES_SUCCESS,
    payload: string[],
}

interface ISearchRepositoriesActionError {
    type: RepositoriesTypes.SEARCH_REPOSITORIES_ERROR,
    payload: string,
}

type IRepositoriesActions =
    ISearchRepositoriesActionStart |
    ISearchRepositoriesActionSuccess |
    ISearchRepositoriesActionError;

export default IRepositoriesActions;