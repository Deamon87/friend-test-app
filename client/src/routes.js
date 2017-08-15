import React    from 'react';
import {Route, IndexRoute, Redirect, IndexRedirect} from 'react-router';
import LoginPageComponent from 'components/loginComponent';

export default (
    <Route path="/">
        <IndexRedirect to="/signin"/>

        <Route path="signin" component={LoginPageComponent}/>
    </Route>
);
