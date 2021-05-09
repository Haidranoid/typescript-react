import {FC} from 'react';
import RepositoriesList from "./RepositoriesList";

const App: FC = () => {
    return <div>
        <h1>Search for a package</h1>
        <RepositoriesList/>
    </div>
}

export default App;