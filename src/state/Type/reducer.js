import {combineReducers} from 'redux';

import * as types from '@state/Type/types';
import {requestError, requestStart, requestSuccess} from '@util/state';

export const getAreasDropdown = (state = {areas: [], loading: false, requested: false}, action) => {
    switch (action.type) {
        case types.GET_AREAS_DROPDOWN_REQUEST:
            return requestStart(undefined, {areas: []});
        case types.GET_AREAS_DROPDOWN_SUCCESS:
            return requestSuccess(undefined, {areas: action.areas});
        case types.GET_AREAS_DROPDOWN_ERROR:
            return requestError(action, {areas: []});
        default:
            return state;
    }
};

export const getUpsDropdown = (state = {ups: [], loading: false, requested: false}, action) => {
    switch (action.type) {
        case types.GET_UPS_DROPDOWN_REQUEST:
            return requestStart(undefined, {ups: []});
        case types.GET_UPS_DROPDOWN_SUCCESS:
            return requestSuccess(undefined, {ups: action.ups});
        case types.GET_UPS_DROPDOWN_ERROR:
            return requestError(action, {ups: []});
        default:
            return state;
    }
};

export const getSegmentsDropdown = (state = {segments: [], loading: false, requested: false}, action) => {
    switch (action.type) {
        case types.GET_SEGMENTS_DROPDOWN_REQUEST:
            return requestStart(undefined, {segments: []});
        case types.GET_SEGMENTS_DROPDOWN_SUCCESS:
            return requestSuccess(undefined, {segments: action.segments});
        case types.GET_SEGMENTS_DROPDOWN_ERROR:
            return requestError(action, {segments: []});
        default:
            return state;
    }
};

export const getFiles = (state = {files: [], loading: false, requested: false}, action) => {
    switch (action.type) {
        case types.GET_FILES_REQUEST:
            return requestStart(undefined, {files: []});
        case types.GET_FILES_SUCCESS:
            return requestSuccess(undefined, {files: action.files});
        case types.GET_FILES_ERROR:
            return requestError(action, {files: []});
        default:
            return state;
    }
};

export const getStatuses = (state = {statuses: [], loading: false, requested: false}, action) => {
    switch (action.type) {
        case types.GET_STATUSES_REQUEST:
            return requestStart(undefined, {statuses: []});
        case types.GET_STATUSES_SUCCESS:
            return requestSuccess(undefined, {statuses: action.statuses});
        case types.GET_STATUSES_ERROR:
            return requestError(action, {statuses: []});
        default:
            return state;
    }
};

export const getSituations = (state = {situations: [], loading: false, requested: false}, action) => {
    switch (action.type) {
        case types.GET_SITUATIONS_REQUEST:
            return requestStart(undefined, {situations: []});
        case types.GET_SITUATIONS_SUCCESS:
            return requestSuccess(undefined, {situations: action.situations});
        case types.GET_SITUATIONS_ERROR:
            return requestError(action, {situations: []});
        default:
            return state;
    }
};

export const getAssignmentsTypes = (state = {assignmentsTypes: [], loading: false, requested: false}, action) => {
    switch (action.type) {
        case types.GET_ASSIGNMENTS_TYPES_REQUEST:
            return requestStart(undefined, {assignmentsTypes: []});
        case types.GET_ASSIGNMENTS_TYPES_SUCCESS:
            return requestSuccess(undefined, {assignmentsTypes: action.assignmentsTypes});
        case types.GET_ASSIGNMENTS_TYPES_ERROR:
            return requestError(action, {assignmentsTypes: []});
        default:
            return state;
    }
};

const typeReducer = combineReducers({
    getAreasDropdown, getUpsDropdown, getSegmentsDropdown, getFiles, getStatuses, getSituations, getAssignmentsTypes
});

export default typeReducer;
