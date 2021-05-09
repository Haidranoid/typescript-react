import React, {FC, useState} from 'react';

import useActions from "./hooks/useActions";
import useTypedSelector from "./hooks/useTypedSelector";

const RepositoriesList: FC = () => {
    const {searchRepositories} = useActions();
    const {loading, error, data} = useTypedSelector(state => state.repositories);

    const [term, setTerm] = useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRepositories(term);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input type="text" value={term} onChange={onChange}/>
            <button type="submit">Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!loading && !error && data.map((name) => <div key={name}>{name}</div>)}
    </div>
}

export default RepositoriesList;