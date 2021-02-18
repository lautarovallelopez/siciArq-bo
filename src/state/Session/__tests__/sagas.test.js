import {
    call, put
} from 'redux-saga/effects';

import SessionService from '@services/session';
import {
    getSessionUserSuccess,
    getSessionUserError,
    validateSession,
    validateSessionError,
    validateSessionSuccess
} from '@state/Session/actions';
import {User} from '@model';

import * as sagas from '../sagas';

describe('signOut', () => {
    it('handles successful attempts', () => {
        const saga = sagas.signOut();
        expect(saga.next()).toEqual({
            done: false,
            value: call(SessionService.signOut)
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('getSessionUser', () => {
    it('handles successful attempts', () => {
        const user = {
            id: 1,
            name: 'userTest',
            surname: 'userTest'
        };
        const saga = sagas.getSessionUser();
        expect(saga.next()).toEqual({
            done: false,
            value: call(SessionService.fetchCurrent)
        });
        expect(saga.next({user})).toEqual({
            done: false,
            value: put(getSessionUserSuccess(new User(user)))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const saga = sagas.getSessionUser();
        expect(saga.next()).toEqual({
            done: false,
            value: call(SessionService.fetchCurrent)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(getSessionUserError(error))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});

describe('validateSession', () => {
    it('handles successful attempts', () => {
        const queryParams = {accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'};
        const profile = {
            id: 1
        };
        const action = validateSession(queryParams);
        const saga = sagas.validateSession(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(SessionService.validateSession, queryParams)
        });
        expect(saga.next()).toEqual({
            done: false,
            value: call(SessionService.getSession)
        });
        expect(saga.next(profile)).toEqual({
            done: false,
            value: put(getSessionUserSuccess(profile))
        });
        expect(saga.next()).toEqual({
            done: false,
            value: put(validateSessionSuccess())
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });

    it('handles unsuccessful attempts', () => {
        const queryParams = {accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'};
        const action = validateSession(queryParams);
        const saga = sagas.validateSession(action);
        expect(saga.next()).toEqual({
            done: false,
            value: call(SessionService.validateSession, queryParams)
        });
        const error = new Error('Oops!');
        expect(saga.throw(error)).toEqual({
            done: false,
            value: put(validateSessionError(error))
        });
        expect(saga.next()).toEqual({
            done: true,
            value: undefined
        });
    });
});
