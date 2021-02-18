import * as types from '../types';

describe('SIGN_OUT_REQUESTED', () => {
    it('returns the correct action', () => {
        expect(types.SIGN_OUT_REQUESTED).toBe(
            'Session/SIGN_OUT_REQUESTED'
        );
    });
});

describe('GET_SESSION_USER_REQUEST', () => {
    it('returns the correct action', () => {
        expect(types.GET_SESSION_USER_REQUEST).toBe(
            'Session/GET_SESSION_USER_REQUEST'
        );
    });
});

describe('GET_SESSION_USER_SUCCESS', () => {
    it('returns the correct action', () => {
        expect(types.GET_SESSION_USER_SUCCESS).toBe(
            'Session/GET_SESSION_USER_SUCCESS'
        );
    });
});

describe('GET_SESSION_USER_ERROR', () => {
    it('returns the correct action', () => {
        expect(types.GET_SESSION_USER_ERROR).toBe(
            'Session/GET_SESSION_USER_ERROR'
        );
    });
});

describe('VALIDATE_SESSION', () => {
    it('returns the correct action', () => {
        expect(types.VALIDATE_SESSION).toBe(
            'Session/VALIDATE_SESSION'
        );
    });
});

describe('VALIDATE_SESSION_SUCCESS', () => {
    it('returns the correct action', () => {
        expect(types.VALIDATE_SESSION_SUCCESS).toBe(
            'Session/VALIDATE_SESSION_SUCCESS'
        );
    });
});

describe('VALIDATE_SESSION_ERROR', () => {
    it('returns the correct action', () => {
        expect(types.VALIDATE_SESSION_ERROR).toBe(
            'Session/VALIDATE_SESSION_ERROR'
        );
    });
});
