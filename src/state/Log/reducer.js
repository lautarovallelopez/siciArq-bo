import {combineReducers} from 'redux';

import {
    GET_LOGS_REQUEST,
    GET_LOGS_SUCCESS,
    GET_LOGS_ERROR
} from '@state/Log/types';

import {requestError, requestStart, requestSuccess} from '../../util/state';

export const getLogs = (state = {
    logs: [], count: undefined, loading: false, requested: false
}, action) => {
    switch (action.type) {
        case GET_LOGS_REQUEST:
            return requestStart(undefined, {logs: [], count: undefined});
        case GET_LOGS_SUCCESS:
            return requestSuccess(undefined, {logs: action.logs, count: action.count});
        case GET_LOGS_ERROR:
            return requestError(action, {logs: [], count: undefined});
        default:
            return state;
    }
};

const logReducer = combineReducers({getLogs});

export default logReducer;
