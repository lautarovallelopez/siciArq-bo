import * as types from './types';

export const getUpsDropdownRequest = state => ({type: types.GET_UPS_DROPDOWN_REQUEST, state});
export const getUpsDropdownSuccess = ups => ({type: types.GET_UPS_DROPDOWN_SUCCESS, ups});
export const getUpsDropdownError = error => ({type: types.GET_UPS_DROPDOWN_ERROR, error});

export const getAreasDropdownRequest = (state, ups) => ({type: types.GET_AREAS_DROPDOWN_REQUEST, state, ups});
export const getAreasDropdownSuccess = areas => ({type: types.GET_AREAS_DROPDOWN_SUCCESS, areas});
export const getAreasDropdownError = error => ({type: types.GET_AREAS_DROPDOWN_ERROR, error});

export const getSegmentsDropdownRequest = (state, ups, area) => ({
    type: types.GET_SEGMENTS_DROPDOWN_REQUEST, state, ups, area
});
export const getSegmentsDropdownSuccess = segments => ({type: types.GET_SEGMENTS_DROPDOWN_SUCCESS, segments});
export const getSegmentsDropdownError = error => ({type: types.GET_SEGMENTS_DROPDOWN_ERROR, error});

export const getFilesRequest = () => ({type: types.GET_FILES_REQUEST});
export const getFilesSuccess = files => ({type: types.GET_FILES_SUCCESS, files});
export const getFilesError = error => ({type: types.GET_FILES_ERROR, error});

export const getStatusesRequest = () => ({type: types.GET_STATUSES_REQUEST});
export const getStatusesSuccess = statuses => ({type: types.GET_STATUSES_SUCCESS, statuses});
export const getStatusesError = error => ({type: types.GET_STATUSES_ERROR, error});

export const getSituationsRequest = status => ({type: types.GET_SITUATIONS_REQUEST, status});
export const getSituationsSuccess = situations => ({type: types.GET_SITUATIONS_SUCCESS, situations});
export const getSituationsError = error => ({type: types.GET_SITUATIONS_ERROR, error});

export const getAssignmentsTypesRequest = () => ({type: types.GET_ASSIGNMENTS_TYPES_REQUEST});
export const getAssignmentsTypesSuccess = assignmentsTypes => ({
    type: types.GET_ASSIGNMENTS_TYPES_SUCCESS,
    assignmentsTypes
});
export const getAssignmentsTypesError = error => ({type: types.GET_ASSIGNMENTS_TYPES_ERROR, error});
