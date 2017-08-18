import {DO_LOGIN, LOGIN_SUCCESS_ACTION ,LOGIN_FAILED_ACTION,
        FRIENDS_LIST_FETCH, FRIENDS_LIST_FETCHED} from '../actions/actions';

const INITIAL_STATE = {
    loggedUser: {isLogged: false},
    friendList : []
};

export default function(state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {
        case DO_LOGIN :
            return {...state};
        case LOGIN_SUCCESS_ACTION:
            return {...state, loggedUser: {isLogged: true}};
        case LOGIN_FAILED_ACTION:
            return {...state};

        case FRIENDS_LIST_FETCH:
            return {...state};

        case FRIENDS_LIST_FETCHED:
            return {...state, friendList : action.payload};
    }
}