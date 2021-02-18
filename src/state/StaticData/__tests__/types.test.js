import * as types from '../types';

describe('GET_STATIC_DATA_REQUEST', () => {
    it('returns the correct action', () => {
        expect(types.GET_STATIC_DATA_REQUEST).toBe(
            'StaticData/GET_STATIC_DATA_REQUEST'
        );
    });
});

describe('GET_STATIC_DATA_SUCCESS', () => {
    it('returns the correct action', () => {
        expect(types.GET_STATIC_DATA_SUCCESS).toBe(
            'StaticData/GET_STATIC_DATA_SUCCESS'
        );
    });
});

describe('GET_STATIC_DATA_ERROR', () => {
    it('returns the correct action', () => {
        expect(types.GET_STATIC_DATA_ERROR).toBe(
            'StaticData/GET_STATIC_DATA_ERROR'
        );
    });
});
