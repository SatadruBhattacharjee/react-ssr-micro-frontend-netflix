import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './store/reducers';
import promise from 'redux-promise';

import App from './containers/ListingContent';

const preloadedState = window.__PRELOADED_LISTINGS || {};
//delete window.__PRELOADED_LISTINGS;
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const app = (
    <Provider store={createStoreWithMiddleware(reducers, preloadedState)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.hydrate(app, document.getElementById('listings'));
