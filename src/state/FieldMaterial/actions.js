import * as types from './types';

export const getFieldMaterialsRequest = () => ({type: types.GET_FIELD_MATERIALS_REQUEST});
export const getFieldMaterialsSuccess = fieldMaterials => ({type: types.GET_FIELD_MATERIALS_SUCCESS, fieldMaterials});
export const getFieldMaterialsError = error => ({type: types.GET_FIELD_MATERIALS_ERROR, error});

export const getFieldMaterialsByStateRequest = state => ({type: types.GET_FIELD_MATERIALS_BY_STATE_REQUEST, state});
export const getFieldMaterialsByStateSuccess = fieldMaterials => ({
    type: types.GET_FIELD_MATERIALS_BY_STATE_SUCCESS,
    fieldMaterials
});
export const getFieldMaterialsByStateError = error => ({type: types.GET_FIELD_MATERIALS_BY_STATE_ERROR, error});

export const getFieldMaterialsByUpsRequest = (state, ups) => ({
    type: types.GET_FIELD_MATERIALS_BY_UPS_REQUEST,
    state,
    ups
});
export const getFieldMaterialsByUpsSuccess = fieldMaterials => ({
    type: types.GET_FIELD_MATERIALS_BY_UPS_SUCCESS,
    fieldMaterials
});
export const getFieldMaterialsByUpsError = error => ({type: types.GET_FIELD_MATERIALS_BY_UPS_ERROR, error});

export const getFieldMaterialsByAreaRequest = (state, ups, area) => ({
    type: types.GET_FIELD_MATERIALS_BY_AREA_REQUEST, state, ups, area
});
export const getFieldMaterialsByAreaSuccess = fieldMaterials => ({
    type: types.GET_FIELD_MATERIALS_BY_AREA_SUCCESS,
    fieldMaterials
});
export const getFieldMaterialsByAreaError = error => ({type: types.GET_FIELD_MATERIALS_BY_AREA_ERROR, error});
