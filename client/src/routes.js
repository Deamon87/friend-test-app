import React    from 'react';
import {Route, IndexRoute, Redirect, IndexRedirect} from 'react-router';
import LoginPage from './containers/loginContainer';
import FriendsPage from './containers/friendsContainer';

function requireLogin(nextState, replace) {
    const state = this.getState();
    if (!(state && state.loggedUser && state.loggedUser.isLogged)) {
        replace('/signin');
    } else {
        //replace('/welcome')
    }
}


export default (store) => (
    <Route path="/">


        <Route path="friends" component={FriendsPage} onEnter={requireLogin.bind(store)}/>
        <Route path="friends/:page" component={FriendsPage} onEnter={requireLogin.bind(store)}/>
        <IndexRedirect to="/signin"/>
        <Route path="signin" component={LoginPage}/>

    </Route>
);
