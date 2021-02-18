import * as types from './types';

export const submitUserRequest = ({
    id, name, surname, email, documentId, attributes, roles
}, resolve, reject) => ({
    type: types.SUBMIT_USER_REQUEST,
    values: {
        id, name, surname, email, documentId, attributes, roles
    },
    resolve,
    reject
});
export const submitUserSuccess = () => ({type: types.SUBMIT_USER_SUCCESS});
export const submitUserError = error => ({type: types.SUBMIT_USER_ERROR, error});

export const getUsersRequest = filters => ({type: types.GET_USERS_REQUEST, filters});
export const getUsersSuccess = ({users, total}) => ({type: types.GET_USERS_SUCCESS, users, total});
export const getUsersError = error => ({type: types.GET_USERS_ERROR, error});

export const getUserRequest = id => ({type: types.GET_USER_REQUEST, id});
export const getUserSuccess = user => ({type: types.GET_USER_SUCCESS, user});
export const getUserError = error => ({type: types.GET_USER_ERROR, error});
export const resetUser = () => ({type: types.RESET_USER});

export const getUsersByStateAndRoleRequest = (state, role) => ({
    type: types.GET_USERS_BY_STATE_AND_ROLE_REQUEST,
    state,
    role
});
export const getUsersByStateAndRoleSuccess = users => ({
    type: types.GET_USERS_BY_STATE_AND_ROLE_SUCCESS,
    users
});
export const getUsersByStateAndRoleError = error => ({type: types.GET_USERS_BY_STATE_AND_ROLE_ERROR, error});

export const setPage = page => ({type: types.SET_PAGE, page});
export const submitPasswordRecoveryRequested = user => ({type: types.SUBMIT_PASSWORD_RECOVERY_REQUESTED, user});

export const deleteUserRequest = user => ({type: types.DELETE_USER_REQUEST, user});
export const deleteUserSuccess = userId => ({type: types.DELETE_USER_SUCCESS, userId});
export const deleteUserError = error => ({type: types.DELETE_USER_ERROR, error});
