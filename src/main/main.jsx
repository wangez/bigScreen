import React from 'react';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware } from 'redux';
import reducers from './reducers.js';
import MainApp from './components/mainApp.jsx';

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

const Main = () => (
    <Provider store={store}>
        <MainApp />
    </Provider>
);

export default Main;