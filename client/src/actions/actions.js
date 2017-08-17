export const DO_LOGIN = "DO_LOGIN";
export const LOGIN_IN_PROCESS = "LOGIN_IN_PROCESS";
export const LOGIN_SUCCESS_ACTION = "LOGIN_SUCCESS_ACTION";
export const LOGIN_FAILED_ACTION = "LOGIN_FAILED_ACTION";

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