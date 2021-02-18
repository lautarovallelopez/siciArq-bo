import * as types from '../types';

describe('GET_ASSIGNMENTS_REQUEST', () => {
    it('returns the correct action', () => {
        expect(types.GET_ASSIGNMENTS_REQUEST).toBe(
            'Assignment/GET_ASSIGNMENTS_REQUEST'
        );
    });
});

describe('GET_ASSIGNMENTS_SUCCESS', () => {
    it('returns the correct action', () => {
        expect(types.GET_ASSIGNMENTS_SUCCESS).toBe(
            'Assignment/GET_ASSIGNMENTS_SUCCESS'
        );
    });
});

describe('GET_ASSIGNMENTS_ERROR', () => {
    it('returns the correct action', () => {
        expect(types.GET_ASSIGNMENTS_ERROR).toBe(
            'Assignment/GET_ASSIGNMENTS_ERROR'
        );
    });
});

describe('UPDATE_ASSIGNMENT', () => {
    it('returns the correct action', () => {
        expect(types.UPDATE_ASSIGNMENT).toBe(
            'Assignment/UPDATE_ASSIGNMENT'
        );
    });
});

describe('UNSET_TO_ASSIGN', () => {
    it('returns the correct action', () => {
        expect(types.UNSET_TO_ASSIGN).toBe(
            'Assignment/UNSET_TO_ASSIGN'
        );
    });
});

describe('UPDATE_ASSIGNMENTS_REQUEST', () => {
    it('returns the correct action', () => {
        expect(types.UPDATE_ASSIGNMENTS_REQUEST).toBe(
            'Assignment/UPDATE_ASSIGNMENTS_REQUEST'
        );
    });
});

describe('UPDATE_ASSIGNMENTS_SUCCESS', () => {
    it('returns the correct action', () => {
        expect(types.UPDATE_ASSIGNMENTS_SUCCESS).toBe(
            'Assignment/UPDATE_ASSIGNMENTS_SUCCESS'
        );
    });
});

describe('UPDATE_ASSIGNMENTS_ERROR', () => {
    it('returns the correct action', () => {
        expect(types.UPDATE_ASSIGNMENTS_ERROR).toBe(
            'Assignment/UPDATE_ASSIGNMENTS_ERROR'
        );
    });
});
