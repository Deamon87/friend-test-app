import 'file?name=[name].[ext]!../index.html';
import React    from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-loader'

import routes from './routes';
import { Router, Route, Link, IndexRoute, useRouterHistory, browserHistory} from 'react-router';

ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('app'));
