import {DO_LOGIN, LOGIN_SUCCESS_ACTION ,LOGIN_FAILED_ACTION,
        FRIENDS_LIST_FETCH, FRIENDS_LIST_FETCHED,
        FRIENDS_LIST_FETCH_NEXT, FRIENDS_LIST_FETCHED_NEXT,
        FRIEND_LIST_FILTER,
        FRIEND_LIST_FILTER_SERVER,
        FRIEND_LIST_FILTER_SERVER_FETCHED} from '../actions/actions';

const INITIAL_STATE = {
    loggedUser: {isLogged: false},
    friendList : [],
    originalFriendList : [],
    filter : {},
    page : 0
};

function filterFriendList(friendList, filter) {
    var newFriendList = friendList.filter((a) => {
        if (filter.age) {
            return a.age === filter.age;
        }
        if (filter.gender) {
            return a.gender == filter.gender;
        }

        return true;

    });
    return newFriendList;
}

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
            return {...state, originalFriendList: action.payload, friendList : filterFriendList(action.payload, state.filter)};

        case FRIENDS_LIST_FETCH_NEXT:
            return {...state, page : action.meta};

        case FRIENDS_LIST_FETCHED_NEXT:
            return {...state, originalFriendList: action.payload, friendList : filterFriendList(action.payload, state.filter)};

        case FRIEND_LIST_FILTER:
            return {...state, filter: action.payload, friendList : filterFriendList(state.originalFriendList, action.payload)}

        case FRIEND_LIST_FILTER_SERVER:
            return {...state, filter: action.payload, friendList : filterFriendList(action.payload, state.filter)}
    }
}