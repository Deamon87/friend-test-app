export const DO_LOGIN = "DO_LOGIN";
export const CHECK_LOGIN = "CHECK_LOGIN";
export const LOGIN_IN_PROCESS = "LOGIN_IN_PROCESS";
export const LOGIN_SUCCESS_ACTION = "LOGIN_SUCCESS_ACTION";
export const LOGIN_FAILED_ACTION = "LOGIN_FAILED_ACTION";

export const FRIENDS_LIST_FETCH = "FRIENDS_LIST_FETCH";
export const FRIENDS_LIST_FETCHED = "FRIENDS_LIST_FETCHED";
export const FRIENDS_LIST_FETCH_NEXT = "FRIENDS_LIST_FETCH_NEXT";
export const FRIENDS_LIST_FETCHED_NEXT = "FRIENDS_LIST_FETCHED_NEXT";

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

export function fetchFriendList() {
    return {
        type: FRIENDS_LIST_FETCH,
        payload: {}
    }
}

export function friendListFetched(data) {
    return {
        type: FRIENDS_LIST_FETCHED,
        payload: data
    }
}

export function fetchfriendList(data) {
    return {
        type: FRIENDS_LIST_FETCH_NEXT,
        payload: data
    }
}

export function friendListNextFetched(data) {
    return {
        type: FRIENDS_LIST_FETCHED_NEXT,
        payload: data
    }
}
