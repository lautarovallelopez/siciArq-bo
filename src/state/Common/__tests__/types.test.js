import * as types from '../types';

describe('ERROR_OCCURRED', () => {
    it('returns the correct action', () => {
        expect(types.ERROR_OCCURRED).toBe(
            'Common/ERROR_OCCURRED'
        );
    });
});

describe('SET_NOTIFICATION', () => {
    it('returns the correct action', () => {
        expect(types.SET_NOTIFICATION).toBe(
            'Common/SET_NOTIFICATION'
        );
    });
});

describe('SET_SEARCH_PARAMS', () => {
    it('returns the correct action', () => {
        expect(types.SET_SEARCH_PARAMS).toBe(
            'Common/SET_SEARCH_PARAMS'
        );
    });
});

describe('RESET_SEARCH_PARAMS', () => {
    it('returns the correct action', () => {
        expect(types.RESET_SEARCH_PARAMS).toBe(
            'Common/RESET_SEARCH_PARAMS'
        );
    });
});

describe('OPEN_CONFIRM_MODAL', () => {
    it('returns the correct action', () => {
        expect(types.OPEN_CONFIRM_MODAL).toBe(
            'Common/OPEN_CONFIRM_MODAL'
        );
    });
});

describe('CLOSE_CONFIRM_MODAL', () => {
    it('returns the correct action', () => {
        expect(types.CLOSE_CONFIRM_MODAL).toBe(
            'Common/CLOSE_CONFIRM_MODAL'
        );
    });
});
