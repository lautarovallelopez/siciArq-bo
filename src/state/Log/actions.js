import * as types from './types';

export const getLogsRequest = ({
    state, term, role, fromDate, toDate, skip = 0
} = {}) => ({
    type: types.GET_LOGS_REQUEST, state, term, role, fromDate, toDate, skip
});
export const getLogsSuccess = (logs, count) => ({type: types.GET_LOGS_SUCCESS, logs, count});
export const getLogsError = error => ({type: types.GET_LOGS_ERROR, error});
