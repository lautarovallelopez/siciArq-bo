import * as types from '../types';

describe('GET_LOGS_REQUEST', () => {
    it('returns the correct action', () => {
        expect(types.GET_LOGS_REQUEST).toBe(
            'Log/GET_LOGS_REQUEST'
        );
    });
});

describe('GET_LOGS_SUCCESS', () => {
    it('returns the correct action', () => {
        expect(types.GET_LOGS_SUCCESS).toBe(
            'Log/GET_LOGS_SUCCESS'
        );
    });
});

describe('GET_LOGS_ERROR', () => {
    it('returns the correct action', () => {
        expect(types.GET_LOGS_ERROR).toBe(
            'Log/GET_LOGS_ERROR'
        );
    });
});
