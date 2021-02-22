import {combineReducers} from 'redux';
import initialState from './initialState';
import * as types from './types';

export const diccionarioLinguistico = (state=initialState, action) => {
    switch (action.type) {
        case types.FETCH_DICCIONARIOS_LINGUISTICOS_REQUESTED:
            return {
                ...state,
                page: action.page
            }
        case types.FETCH_DICCIONARIOS_LINGUISTICOS_SUCCEEDED:
            return {
                ...state,
                diccionarios : action.response.diccionarios,
                limit: action.response.limit,
                total: action.response.total
            }
        case types.UPDATE_DICCIONARIO_LINGUISTICO:
            return {
                ...state,
                diccionarioActual : action.updates
            }
        case types.FETCH_ONE_DICCIONARIO_LINGUISTICO_REQUESTED:
            return {
                ...state,
                diccionarioActual : initialState.diccionarioActual
            };
        case types.FETCH_ONE_DICCIONARIO_LINGUISTICO_SUCCEEDED:
            return {
                ...state,
                diccionarioActual : action.diccionario
            }
        default:
            return {...state};
    }
};



const diccionarioLinguisticoReducer = combineReducers({
    diccionarioLinguistico
});

export default diccionarioLinguisticoReducer;
