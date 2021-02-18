import * as types from './types';

export const getStaticDataRequest = () => ({type: types.GET_STATIC_DATA_REQUEST});
export const getStaticDataSuccess = staticData => ({type: types.GET_STATIC_DATA_SUCCESS, staticData});
export const getStaticDataError = error => ({type: types.GET_STATIC_DATA_ERROR, error});
