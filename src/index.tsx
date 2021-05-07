import {FC} from 'react';
import ReactDom from 'react-dom'
import {Provider} from "react-redux";

import store from "./redux/store/store";

const App: FC = () => {
    return <Provider store={store}>

    </Provider>
}

ReactDom.render(<App/>, document.getElementById('root'));