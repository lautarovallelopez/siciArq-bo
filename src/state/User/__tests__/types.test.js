import * as types from '../types';

describe('SUBMIT_USER_REQUEST', () => {
    it('returns the correct action', () => {
        expect(types.SUBMIT_USER_REQUEST).toBe(
            'User/SUBMIT_USER_REQUEST'
        );
    });
});

describe('SUBMIT_USER_SUCCESS', () => {
    it('returns the correct action', () => {
        expect(types.SUBMIT_USER_SUCCESS).toBe(
            'User/SUBMIT_USER_SUCCESS'
        );
    });
});

describe('SUBMIT_USER_ERROR', () => {
    it('returns the correct action', () => {
        expect(types.SUBMIT_USER_ERROR).toBe(
            'User/SUBMIT_USER_ERROR'
        );
    });
});

describe('GET_USERS_REQUEST', () => {
    it('returns the correct action', () => {
        expect(types.GET_USERS_REQUEST).toBe(
            'User/GET_USERS_REQUEST'
        );
    });
});

describe('GET_USERS_SUCCESS', () => {
    it('returns the correct action', () => {
        expect(types.GET_USERS_SUCCESS).toBe(
            'User/GET_USERS_SUCCESS'
        );
    });
});

describe('GET_USERS_ERROR', () => {
    it('returns the correct action', () => {
        expect(types.GET_USERS_ERROR).toBe(
            'User/GET_USERS_ERROR'
        );
    });
});

describe('GET_USER_REQUEST', () => {
    it('returns the correct action', () => {
        expect(types.GET_USER_REQUEST).toBe(
            'User/GET_USER_REQUEST'
        );
    });
});

describe('GET_USER_SUCCESS', () => {
    it('returns the correct action', () => {
        expect(types.GET_USER_SUCCESS).toBe(
            'User/GET_USER_SUCCESS'
        );
    });
});

describe('GET_USER_ERROR', () => {
    it('returns the correct action', () => {
        expect(types.GET_USER_ERROR).toBe(
            'User/GET_USER_ERROR'
        );
    });
});

describe('RESET_USER', () => {
    it('returns the correct action', () => {
        expect(types.RESET_USER).toBe(
            'User/RESET_USER'
        );
    });
});

describe('GET_USERS_BY_STATE_AND_ROLE_REQUEST', () => {
    it('returns the correct action', () => {
        expect(types.GET_USERS_BY_STATE_AND_ROLE_REQUEST).toBe(
            'User/GET_USERS_BY_STATE_AND_ROLE_REQUEST'
        );
    });
});

describe('GET_USERS_BY_STATE_AND_ROLE_SUCCESS', () => {
    it('returns the correct action', () => {
        expect(types.GET_USERS_BY_STATE_AND_ROLE_SUCCESS).toBe(
            'User/GET_USERS_BY_STATE_AND_ROLE_SUCCESS'
        );
    });
});

describe('GET_USERS_BY_STATE_AND_ROLE_ERROR', () => {
    it('returns the correct action', () => {
        expect(types.GET_USERS_BY_STATE_AND_ROLE_ERROR).toBe(
            'User/GET_USERS_BY_STATE_AND_ROLE_ERROR'
        );
    });
});
