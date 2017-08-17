import 'file?name=[name].[ext]!../index.html';
import React    from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-loader'

import getRoutes from './routes';
import reducers from './reducers/index'
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, useRouterHistory, browserHistory} from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';

import promise from 'redux-promise';
const enhancer = applyMiddleware(promise);

const store = enhancer(createStore)(reducers);


ReactDOM.render(
    <Provider store={ store }>
        <Router history={browserHistory} routes={getRoutes(store)} />
    </Provider>,

    document.getElementById('app'));
