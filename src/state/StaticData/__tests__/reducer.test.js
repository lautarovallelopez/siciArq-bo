import reducer from '../reducer';
import * as actions from '../actions';

const initialState = {
    roles: [],
    states: [],
    loading: false
};

describe('staticData reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle `GET_STATIC_DATA_REQUEST`', () => {
        expect(reducer(undefined, actions.getStaticDataRequest())).toEqual({
            ...initialState,
            loading: true
        });
    });

    it('should handle `GET_STATIC_DATA_SUCCESS`', () => {
        const staticData = {
            roles: [
                {
                    _id: 1,
                    name: 'cn'
                }
            ]
        };
        expect(reducer(undefined, actions.getStaticDataSuccess(staticData))).toEqual({
            ...initialState,
            ...staticData,
            loading: false
        });
    });

    it('should handle `GET_STATIC_DATA_ERROR`', () => {
        const error = new Error('Oops!');
        expect(reducer(undefined, actions.getStaticDataError(error))).toEqual({
            ...initialState,
            loading: false,
            error
        });
    });
});
