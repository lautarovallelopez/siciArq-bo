import User from '@model/user';
import {
    GET_SESSION_USER_SUCCESS,
    GET_SESSION_USER_REQUEST,
    GET_SESSION_USER_ERROR,
    VALIDATE_SESSION,
    VALIDATE_SESSION_SUCCESS,
    VALIDATE_SESSION_ERROR
} from '@state/Session/types';

const initialState = {
    roles: [],
    loading: false,
    token: null,
    user: new User()
};

export default function session(
    state = initialState,
    action
) {
    switch (action.type) {
        case GET_SESSION_USER_REQUEST:
            return {...state, loading: true};
        case GET_SESSION_USER_SUCCESS:
            return {
                ...state,
                user: new User(action.user),
                roles: action.user.roles,
                loading: false
            };
        case GET_SESSION_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case VALIDATE_SESSION:
            return {
                ...state,
                loading: true
            };
        case VALIDATE_SESSION_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case VALIDATE_SESSION_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return {...state};
    }
}
