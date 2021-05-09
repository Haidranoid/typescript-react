import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as repositoriesActions from "../state/actions-creators/repositoriesActions";

const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators({
        searchRepositories: repositoriesActions.searchRepositories,

    }, dispatch);
}

export default useActions;