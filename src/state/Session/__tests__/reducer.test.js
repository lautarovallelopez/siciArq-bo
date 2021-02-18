import User from '@model/user';

import reducer from '../reducer';
import * as actions from '../actions';

const initialState = {
    roles: [],
    loading: false,
    token: null,
    user: new User()
};

describe('session reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle `GET_SESSION_USER_REQUEST`', () => {
        expect(reducer(undefined, actions.getSessionUserRequest())).toEqual({
            ...initialState,
            loading: true
        });
    });

    it('should handle `GET_SESSION_USER_SUCCESS`', () => {
        const user = {
            id: 1,
            username: 'test',
            roles: ['cn', 'admin']
        };
        expect(reducer(undefined, actions.getSessionUserSuccess(user))).toEqual({
            ...initialState,
            user,
            roles: user.roles,
            loading: false
        });
    });

    it('should handle `GET_SESSION_USER_ERROR`', () => {
        const error = new Error('Oops!');
        expect(reducer(undefined, actions.getSessionUserError(error))).toEqual({
            ...initialState,
            loading: false,
            error
        });
    });

    it('should handle `VALIDATE_SESSION`', () => {
        const queryString = {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'};
        expect(reducer(undefined, actions.validateSession(queryString))).toEqual({
            ...initialState,
            loading: true
        });
    });

    it('should handle `VALIDATE_SESSION_SUCCESS`', () => {
        expect(reducer(undefined, actions.validateSessionSuccess())).toEqual({
            ...initialState,
            loading: false
        });
    });

    it('should handle `VALIDATE_SESSION_ERROR`', () => {
        const error = new Error('Oops!');
        expect(reducer(undefined, actions.validateSessionError(error))).toEqual({
            ...initialState,
            loading: false,
            error
        });
    });
});
