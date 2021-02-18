import {call, put} from 'redux-saga/effects';

import LogService from '@services/log';
import {setNotification} from '@state/Common/actions';
import types from '@constants/notificationTypes';
import roles from '../../../constants/roles';

import * as actions from '../actions';
import * as sagas from '../sagas';

describe('getLogs', () => {
    it('handles successful attempts', () => {
        const state = 2;
        const term = 'car';
        const role = roles.SUB_COORDINATOR;
        const fromDate = new Date();
        const toDate = new Date();
        const skip = 0;
        const action = actions.getLogsRequest({
            state, term, role, fromDate, toDate, skip
        });
        const saga = sagas.getLogs(action);
        const response = {
            logs: [{
                id: 1
            }],
            count: 1
        };
        expect(saga.next()).toEqual({
            done: false,
            value: call(LogService.getLogs, state, term, role, fromDate, toDate, skip)
        });
        expect(saga.next(response)).toEqual({
            done: false,
            value: put(actions.getLogsSuccess(response.logs, response.count))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const state = 2;
        const term = 'car';
        const role = roles.SUB_COORDINATOR;
        const fromDate = new Date();
        const toDate = new Date();
        const skip = 0;
        const action = actions.getLogsRequest({
            state, term, role, fromDate, toDate, skip
        });
        const saga = sagas.getLogs(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(LogService.getLogs, state, term, role, fromDate, toDate, skip)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(actions.getLogsError(error))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(setNotification({
                message: 'No se ha podido traer la lista de sincronizaciones, intente más tarde.',
                notificationType: types.ERROR
            }))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});
