import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    RESET_USER,
    SET_PAGE,
    SUBMIT_USER_REQUEST,
    SUBMIT_USER_SUCCESS,
    SUBMIT_USER_ERROR,
    GET_USERS_BY_STATE_AND_ROLE_SUCCESS,
    GET_USERS_BY_STATE_AND_ROLE_REQUEST,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR
} from '@state/User/types';
import {User} from '@model';
import roles from '@constants/roles';

export default (state = {
    currentUser: new User(),
    users: undefined,
    total: 0,
    page: 0,
    teamLeaders: [],
    pollsters: [],
    subCoordinators: [],
    loading: false
}, action) => {
    switch (action.type) {
        case SUBMIT_USER_REQUEST:
            return {...state, loading: true};
        case SUBMIT_USER_SUCCESS:
            return {...state, loading: false};
        case SUBMIT_USER_ERROR:
            return {...state, loading: false, error: action.error};
        case DELETE_USER_REQUEST:
            return {...state, loading: true};
        case DELETE_USER_SUCCESS: {
            const users = state.users.slice();
            const id = action.userId;
            const user = users.find(document => document.id === id);
            user.deleted = !user.deleted;
            return {...state, users, loading: false};
        }
        case DELETE_USER_ERROR:
            return {...state, loading: false, error: action.error};
        case GET_USERS_REQUEST:
            return {
                ...state, page: 0, total: 0, users: undefined, loading: true
            };
        case GET_USERS_SUCCESS:
            return {
                ...state, users: action.users, total: action.total, loading: false
            };
        case GET_USERS_ERROR:
            return {...state, loading: false, error: action.error};
        case GET_USER_REQUEST:
            return {...state, loading: true};
        case GET_USER_SUCCESS:
            return {...state, currentUser: action.user, loading: false};
        case GET_USER_ERROR:
            return {...state, loading: false, error: action.error};
        case RESET_USER:
            return {...state, currentUser: new User()};
        case SET_PAGE:
            return {...state, page: action.page};
        case GET_USERS_BY_STATE_AND_ROLE_REQUEST:
            return {...state, loading: true};
        case GET_USERS_BY_STATE_AND_ROLE_SUCCESS:
            return {
                ...state,
                pollsters: action.users.filter(user => user.roles.includes(roles.POLLSTER)),
                teamLeaders: action.users.filter(user => user.roles.includes(roles.TEAM_LEADER)),
                subCoordinators: action.users.filter(user => user.roles.includes(roles.SUB_COORDINATOR)),
                loading: false
            };
        default:
            return state;
    }
};
