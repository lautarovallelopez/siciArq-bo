import * as actions from '../actions';
import * as types from '../types';
import roles from '../../../constants/roles';

describe('getLogsRequest', () => {
    it('should create an action to get the list of logs', () => {
        const state = 2;
        const term = 'car';
        const role = roles.SUB_COORDINATOR;
        const fromDate = new Date();
        const toDate = new Date();
        const skip = 0;
        expect(actions.getLogsRequest({
            state, term, role, fromDate, toDate, skip
        })).toEqual({
            type: types.GET_LOGS_REQUEST,
            state,
            term,
            role,
            fromDate,
            toDate,
            skip
        });
    });
});

describe('getLogsSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const logs = [
            {
                id: 1
            }
        ];
        const count = 1;
        expect(actions.getLogsSuccess(logs, count)).toEqual({
            type: types.GET_LOGS_SUCCESS,
            logs,
            count
        });
    });
});

describe('getLogsError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getLogsError(error)).toEqual({
            type: types.GET_LOGS_ERROR,
            error
        });
    });
});
