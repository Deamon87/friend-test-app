import {DO_LOGIN, LOGIN_SUCCESS_ACTION ,LOGIN_FAILED_ACTION,
        FRIENDS_LIST_FETCH, FRIENDS_LIST_FETCHED,
        FRIENDS_LIST_FETCH_NEXT, FRIENDS_LIST_FETCHED_NEXT} from '../actions/actions';

const INITIAL_STATE = {
    loggedUser: {isLogged: false},
    friendList : [],
    page : 0
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

        case FRIENDS_LIST_FETCH_NEXT:
            return {...state, page : action.meta};

        case FRIENDS_LIST_FETCHED_NEXT:
            return {...state, friendList : action.payload};
    }
}