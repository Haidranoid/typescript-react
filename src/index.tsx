import React from 'react';
import ReactDom from 'react-dom'

import SearchUser from "./refs/SearchUser";

const App: React.FC = () => {
    return <div>
        <SearchUser />
    </div>
}

ReactDom.render(<App/>, document.getElementById('root'));