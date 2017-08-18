export const DO_LOGIN = "DO_LOGIN";
export const CHECK_LOGIN = "CHECK_LOGIN";
export const LOGIN_IN_PROCESS = "LOGIN_IN_PROCESS";
export const LOGIN_SUCCESS_ACTION = "LOGIN_SUCCESS_ACTION";
export const LOGIN_FAILED_ACTION = "LOGIN_FAILED_ACTION";

export const FRIENDS_LIST_FETCH = "FRIENDS_LIST_FETCH";
export const FRIENDS_LIST_FETCHED = "FRIENDS_LIST_FETCHED";
export const FRIENDS_LIST_FETCH_NEXT = "FRIENDS_LIST_FETCH_NEXT";
export const FRIENDS_LIST_FETCHED_NEXT = "FRIENDS_LIST_FETCHED_NEXT";

export const FRIEND_LIST_FILTER = "FRIEND_LIST_FILTER";
export const FRIEND_LIST_FILTER_SERVER = "FRIEND_SERVER_LIST_FILTER";
export const FRIEND_LIST_FILTER_SERVER_FETCHED = "FRIEND_LIST_FILTER_SERVER_FETCHED";

import { createActions, handleActions, combineActions } from 'redux-actions'
import axios from 'axios';


// import { doLogin } from '../api/webApi';

export function doLogin(data) {
    const request = axios({
        method: 'post',
        url: `/api/login`,
        payload: data,
        headers: []
    });

    return {
        type: LOGIN_IN_PROCESS,
        payload: request
    };
}

export function checkLogin(data) {
    const request = axios({
        method: 'get',
        url: `/api/checkLogin`,
        payload: data,
        headers: []
    });

    return {
        type: LOGIN_IN_PROCESS,
        payload: request
    };
}

export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS_ACTION,
        payload: data
    };
}

export function loginError(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data
    };
}

export function fetchFriendList(page) {
    var url;
    if (page) {
        url = `/api/friends/${page}`;
    } else {
        url = `/api/friends`;
    }
    const request = axios({
        method: 'get',
        url: url,
        headers: []
    });

    return {
        type: FRIENDS_LIST_FETCH,
        payload: request
    }
}

export function friendListFetched(data) {
    return {
        type: FRIENDS_LIST_FETCHED,
        payload: data
    }
}

export function fetchFriendListNext(page) {
    const request = axios({
        method: 'get',
        url: `/api/friends/${page}`,
        headers: []
    });

    return {
        type: FRIENDS_LIST_FETCH_NEXT,
        meta: page,
        payload: request
    }
}

export function friendListNextFetched(data) {
    return {
        type: FRIENDS_LIST_FETCHED_NEXT,
        payload: data
    }
}

export function friendListFilter(filter) {
    return {
        type: FRIEND_LIST_FILTER,
        payload: filter
    }
}

export function friendListFilterServer(name, page) {
    var request;
    if (name) {
        request = axios({
            method: 'get',
            url: `/api/friends/${page}?name=${name}`,
            headers: []
        });
    } else {
        request = axios({
            method: 'get',
            url: `/api/friends/${page}`,
            headers: []
        });
    }

    return {
        type: FRIEND_LIST_FILTER,
        payload: request
    }
}
export function friendListFilterServerFetched(data) {
    return {
        type: FRIENDS_LIST_FETCHED_NEXT,
        payload: data
    }
}