import 'file?name=[name].[ext]!../index.html';
import React    from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-loader'

import routes from './routes';
import reducers from './reducers/index'
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, useRouterHistory, browserHistory} from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';

import promise from 'redux-promise';
const enhancer = applyMiddleware(promise);



ReactDOM.render(
    <Provider store={ enhancer(createStore)(reducers) }>
        <Router history={browserHistory} routes={routes} />
    </Provider>,


    document.getElementById('app'));
