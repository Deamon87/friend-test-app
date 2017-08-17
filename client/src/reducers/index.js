import {DO_LOGIN, LOGIN_SUCCESS_ACTION ,LOGIN_FAILED_ACTION } from '../actions/actions';

const INITIAL_STATE = {
    loggedUser: {isLogged: false}
};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {
        case DO_LOGIN :
            return { ...state};
        case LOGIN_SUCCESS_ACTION:
            debugger;

            return { ...state, loggedUser: {isLogged: true}};
        case LOGIN_FAILED_ACTION:
            debugger;
            return { ...state}
        }
}