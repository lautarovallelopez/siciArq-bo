import {combineReducers} from 'redux';

import * as types from './types';

export const getFieldMaterials = (state = {fieldMaterials: [], loading: false, requested: false}, action) => {
    switch (action.type) {
        case types.GET_FIELD_MATERIALS_REQUEST:
            return {...state, loading: true, requested: true};
        case types.GET_FIELD_MATERIALS_SUCCESS:
            return {
                ...state, loading: false, requested: true, fieldMaterials: action.fieldMaterials
            };
        case types.GET_FIELD_MATERIALS_ERROR:
            return {
                ...state,
                loading: false,
                requested: true,
                error: action.error,
                fieldMaterials: []
            };
        default:
            return state;
    }
};

export const getFieldMaterialsByState = (state = {fieldMaterials: [], loading: false, requested: false}, action) => {
    switch (action.type) {
        case types.GET_FIELD_MATERIALS_BY_STATE_REQUEST:
            return {...state, loading: true, requested: true};
        case types.GET_FIELD_MATERIALS_BY_STATE_SUCCESS:
            return {
                ...state, loading: false, requested: true, fieldMaterials: action.fieldMaterials
            };
        case types.GET_FIELD_MATERIALS_BY_STATE_ERROR:
            return {
                ...state,
                loading: false,
                requested: true,
                error: action.error,
                fieldMaterials: []
            };
        default:
            return state;
    }
};

export const getFieldMaterialsByUps = (state = {fieldMaterials: [], loading: false, requested: false}, action) => {
    switch (action.type) {
        case types.GET_FIELD_MATERIALS_BY_UPS_REQUEST:
            return {...state, loading: true, requested: true};
        case types.GET_FIELD_MATERIALS_BY_UPS_SUCCESS:
            return {
                ...state, loading: false, requested: true, fieldMaterials: action.fieldMaterials
            };
        case types.GET_FIELD_MATERIALS_BY_UPS_ERROR:
            return {
                ...state,
                loading: false,
                requested: true,
                error: action.error,
                fieldMaterials: []
            };
        default:
            return state;
    }
};

export const getFieldMaterialsByArea = (state = {fieldMaterials: [], loading: false, requested: false}, action) => {
    switch (action.type) {
        case types.GET_FIELD_MATERIALS_BY_AREA_REQUEST:
            return {...state, loading: true, requested: true};
        case types.GET_FIELD_MATERIALS_BY_AREA_SUCCESS:
            return {
                ...state, loading: false, requested: true, fieldMaterials: action.fieldMaterials
            };
        case types.GET_FIELD_MATERIALS_BY_AREA_ERROR:
            return {
                ...state,
                loading: false,
                requested: true,
                error: action.error,
                fieldMaterials: []
            };
        default:
            return state;
    }
};

const fieldMaterialReducer = combineReducers({
    getFieldMaterials,
    getFieldMaterialsByState,
    getFieldMaterialsByUps,
    getFieldMaterialsByArea
});

export default fieldMaterialReducer;
