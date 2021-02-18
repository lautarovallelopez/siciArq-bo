import * as actions from '../actions';
import * as types from '../types';

describe('getStaticDataRequest', () => {
    it('should create an action to get the static data', () => {
        expect(actions.getStaticDataRequest()).toEqual({
            type: types.GET_STATIC_DATA_REQUEST
        });
    });
});

describe('getStaticDataSuccess', () => {
    it('should create an action to specify the request has succeeded', () => {
        const staticData = {
            states: [
                {
                    _id: 1,
                    name: 'Buenos Aires'
                }
            ],
            roles: [
                {
                    _id: 'cn',
                    name: 'Coordinador Nacional'
                }
            ]
        };
        expect(actions.getStaticDataSuccess(staticData)).toEqual({
            type: types.GET_STATIC_DATA_SUCCESS,
            staticData
        });
    });
});

describe('getStaticDataError', () => {
    it('creates an action to specify the request has failed', () => {
        const error = new Error('oops');
        expect(actions.getStaticDataError(error)).toEqual({
            type: types.GET_STATIC_DATA_ERROR,
            error
        });
    });
});
