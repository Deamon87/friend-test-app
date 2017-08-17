import React    from 'react';
import {Route, IndexRoute, Redirect, IndexRedirect} from 'react-router';
import LoginPage from './containers/loginContainer';

export default (
    <Route path="/">
        <IndexRedirect to="/signin"/>

        <Route path="signin" component={LoginPage}/>
    </Route>
);
