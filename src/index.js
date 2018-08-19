import React from 'react';
import ReactDOM from 'react-dom'; 

import {Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

import reducers from './readucers/reducers'

import App from './App'; 

const createStoreWithMiddelWare = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddelWare(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root')); 
