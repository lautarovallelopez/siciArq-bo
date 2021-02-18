import {GET_STATIC_DATA_REQUEST, GET_STATIC_DATA_SUCCESS, GET_STATIC_DATA_ERROR} from '@state/StaticData/types';

export default function staticData(state = {
    roles: [],
    states: [],
    loading: false
}, action) {
    switch (action.type) {
        case GET_STATIC_DATA_REQUEST:
            return {...state, loading: true};
        case GET_STATIC_DATA_SUCCESS:
            return {...state, ...action.staticData, loading: false};
        case GET_STATIC_DATA_ERROR:
            return {...state, loading: false, error: action.error};
        default:
            return state;
    }
}
