import * as actions from '../actions';
import * as types from '../types';

describe('requestSignOut', () => {
    it('should create an action to sign out', () => {
        expect(actions.requestSignOut()).toEqual({
            type: types.SIGN_OUT_REQUESTED
        });
    });
});

describe('getSessionUserRequest', () => {
    it('should create an action to request fetch session user', () => {
        expect(actions.getSessionUserRequest()).toEqual({
            type: types.GET_SESSION_USER_REQUEST
        });
    });
});

describe('getSessionUserSuccess', () => {
    it('creates an action to specify the request has succeeded', () => {
        const user = {
            id: 1,
            name: 'userName',
            surname: 'useSurname',
            username: 'user'
        };
        expect(actions.getSessionUserSuccess(user)).toEqual({
            type: types.GET_SESSION_USER_SUCCESS,
            user
        });
    });
});

describe('getSessionUserError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getSessionUserError(error)).toEqual({
            type: types.GET_SESSION_USER_ERROR,
            error
        });
    });
});

describe('validateSession', () => {
    it('creates an action to validate session', () => {
        const queryParams = {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'};
        expect(actions.validateSession(queryParams)).toEqual({
            type: types.VALIDATE_SESSION,
            queryParams
        });
    });
});

describe('validateSessionSuccess', () => {
    it('creates an action to specify the request has succeeded', () => {
        expect(actions.validateSessionSuccess()).toEqual({
            type: types.VALIDATE_SESSION_SUCCESS
        });
    });
});

describe('validateSessionError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.validateSessionError(error)).toEqual({
            type: types.VALIDATE_SESSION_ERROR,
            error
        });
    });
});
