import * as types from './types';

export const requestSignOut = () => ({type: types.SIGN_OUT_REQUESTED});

export const getSessionUserRequest = () => ({type: types.GET_SESSION_USER_REQUEST});
export const getSessionUserSuccess = user => ({type: types.GET_SESSION_USER_SUCCESS, user});
export const getSessionUserError = error => ({type: types.GET_SESSION_USER_ERROR, error});

export const validateSession = queryParams => ({type: types.VALIDATE_SESSION, queryParams});
export const validateSessionSuccess = () => ({type: types.VALIDATE_SESSION_SUCCESS});
export const validateSessionError = error => ({type: types.VALIDATE_SESSION_ERROR, error});
