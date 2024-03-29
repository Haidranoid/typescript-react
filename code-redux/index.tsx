import ReactDom from 'react-dom'
import {Provider} from "react-redux";

import store from "./state/store/store";
import App from "./App";

ReactDom.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));