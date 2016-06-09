import 'normalize-css/normalize.css';
import './styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './src/components/App';
import { SearchContainer } from './src/components/Search';
import reducer from './src/reducer';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App>
            <SearchContainer />
        </App>
    </Provider>,
    document.getElementById('app')
);
